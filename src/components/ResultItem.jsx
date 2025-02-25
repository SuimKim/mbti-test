import { mbtiDescriptions } from "../libs/utils/mbtiCalculator";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../libs/api/testResults";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/apiConstants";
import useProfile from "../libs/hooks/useProfile";
import { BlueButton, Button } from "./Button";
import { Title } from "./Text";

const ResultItem = ({ item }) => {
  const { id, nickname, result, visibility, date, userId } = item;

  const { auth, isAuthPending, isAuthError } = useProfile();
  const queryClient = useQueryClient();

  const updateVisibilityMutation = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.RESULTS],
      });
    },
  });

  const deleteResultMutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.RESULTS],
      });
    },
  });

  if (isAuthPending) {
    return <div>Loading...</div>;
  }

  if (isAuthError) {
    return <div>Error...</div>;
  }

  return (
    <div className="max-w-xl p-5 mb-5 border-2 shadow-md">
      <div className="flex justify-between">
        <span className="">{nickname}</span>
        <span className="text-slate-400">{date}</span>
      </div>
      <hr className="mb-5 mt-5 border-slate-400" />
      <Title contents={result} />
      <p className="mb-5">
        {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
      </p>
      {auth.id === userId ? (
        <div className="flex justify-end gap-5">
          <BlueButton
            label={!visibility ? "공개로 전환" : "비공개로 전환"}
            onClick={() => updateVisibilityMutation.mutate(item)}
          />
          <Button
            label={"삭제"}
            onClick={() => {
              deleteResultMutation.mutate(id);
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResultItem;
