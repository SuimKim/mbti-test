import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import useForm from "../libs/hooks/useForm";
import ResultItem from "../components/ResultItem";
import { updateProfile } from "../libs/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/apiConstants";
import useResults from "../libs/hooks/useResults";
import useProfile from "../libs/hooks/useProfile";
import { errorToast, notify } from "../components/Toastify";

const MyPage = () => {
  const { formState, onChangeHandler, resetForm } = useForm({
    nickname: "",
  });
  const { nickname } = formState;

  const queryClient = useQueryClient();
  const { auth, isAuthPending, isAuthError } = useProfile();
  const { results, isResultsPending, isResultsError } = useResults();

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.AUTH],
      });
    },
  });

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      errorToast("닉네임을 입력해주세요!");
      return;
    }
    try {
      updateProfileMutation.mutate(formState);
      notify("닉네임 수정이 완료되었어요.");
    } catch (error) {
      errorToast("오류가 발생했어요. 다시 시도해주세요.");
    }
    resetForm();
  };

  if (isResultsPending || isAuthPending) {
    return <div>Loading...</div>;
  }

  if (isResultsError || isAuthError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <FormContainer
        titleLabel="프로필 수정"
        onSubmit={updateProfileHandler}
        buttonName={"수정하기"}
      >
        <p>{auth.nickname}</p>
        <FormInput
          placeholder="닉네임"
          inputType="text"
          name="nickname"
          value={nickname}
          onChange={onChangeHandler}
        />
      </FormContainer>
      <div className="flex flex-col items-center justify-center m-5">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6">나의 테스트 결과</h1>
          {results.map(
            (item) =>
              auth.id == item.userId && <ResultItem item={item} key={item.id} />
          )}
        </div>
      </div>
    </>
  );
};

export default MyPage;
