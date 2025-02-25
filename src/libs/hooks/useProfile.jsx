import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/apiConstants";
import { getUserProfile } from "../api/auth";

const useProfile = () => {
  try {
    const {
      data: auth,
      isPending: isAuthPending,
      isError: isAuthError,
    } = useQuery({
      queryFn: getUserProfile,
      queryKey: [QUERY_KEYS.AUTH],
    });

    return { auth, isAuthPending, isAuthError };
  } catch (error) {
    alert("오류 발생, 잠시 후 다시 시도해주세요.");
  }
};

export default useProfile;
