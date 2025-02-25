import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import { QUERY_KEYS } from "../../constants/apiConstants";

const useResults = () => {
  try {
    const {
      data: results,
      isPending: isResultsPending,
      isError: isResultsError,
    } = useQuery({
      queryFn: getTestResults,
      queryKey: [QUERY_KEYS.RESULTS],
    });
    return { results, isResultsPending, isResultsError };
  } catch (error) {
    alert("오류 발생, 잠시 후 다시 시도해주세요.");
  }
};

export default useResults;
