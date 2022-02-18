import Title from "../../components/Title";
import Vision from "../../components/Vision";
import History from "../../components/History";
import AboutNav from "../../components/AboutNav";
export default function About() {
  return (
    <>
      <Title title="About" />
      <Vision />
      <AboutNav />
      <div className="Description">
        <h2>Festival Land입니다.</h2>
        <p>flland 조명 조경 도시재생</p>
      </div>
      <History />

      <style jsx>
        {`
          .Description {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
