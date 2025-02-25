import { Link } from "react-router-dom";
import MainCard from "../components/MainCard";
import { Button } from "../components/Button";
import { Title } from "../components/Text";

const HomePage = () => {
  return (
    <div className="text-center pt-6">
      <Title contents={"무료 성격 테스트"} />
      <p className="text-center">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-12">
        <MainCard
          title="성격 유형 검사"
          content="자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요."
        />
        <MainCard
          title="성격 유형 이해"
          content="다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다."
        />
        <MainCard
          title="팀 평가"
          content="팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요."
        />
      </div>
      <Link to={"/test"}>
        <Button label={"내 성격 알아보러 가기"} />
      </Link>
    </div>
  );
};

export default HomePage;
