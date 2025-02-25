import ResultItem from "../components/ResultItem";
import { Title } from "../components/Text";
import useResults from "../libs/hooks/useResults";

const TestResultPage = () => {
  const { results, isResultsPending, isResultsError } = useResults();

  if (isResultsPending) {
    return <div>Loading...</div>;
  }

  if (isResultsError) {
    return <div>Error...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-10 ">
      <div className="bg-white p-8 w-full flex flex-col rounded-lg items-center justify-center">
        <Title contents={"MBTI 테스트 결과"} />
        {results.map(
          (item) => item.visibility && <ResultItem item={item} key={item.id} />
        )}
      </div>
    </div>
  );
};

export default TestResultPage;
