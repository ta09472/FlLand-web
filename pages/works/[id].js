import { useRouter } from "next/router";
import Title from "../../components/Title";
export default function Detail() {
  const router = useRouter();
  return (
    <>
      <Title title="Detail" />
      <div className="Info">
        <p>
          1. 사업 명 : 무언가 <br />
          2. 사업 일자: 언젠가 <br />
          3. 위치 : 어딘가 <br />
          4. 면적 : 많이 <br />
          5. 제원 : 무언가
        </p>
      </div>
      <div className="Photos">
        <img />
        <img />
        <img />
        <img />
      </div>
      <style jsx>{`
        .Info {
          display: flex;
        }
        .Photos {
          width: 100%;

          background-color: silver;
        }
        img {
          background-color: gold;
          height: 60vh;
          width: 100%;
        }
      `}</style>
    </>
  );
}
