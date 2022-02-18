import Title from "../../components/Title";
import Vision from "../../components/Vision";
import History from "../../components/History";
import AboutNav from "../../components/AboutNav";
export default function Team() {
  return (
    <>
      <Title title="About" />
      <Vision />
      <AboutNav />
      조직도
      <div className="Team"></div>
      <style jsx>{`
        .Team {
          height: 60vh;
          background-color: silver;
        }
      `}</style>
    </>
  );
}
