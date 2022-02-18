import Title from "../../components/Title";
import Vision from "../../components/Vision";
import History from "../../components/History";
import AboutNav from "../../components/AboutNav";
import Paper from "../../components/Paper";
export default function Certification() {
  const list = [1, 2, 3, 4, 5, 6];

  const CertificationList = list.map((data, index) => (
    <Paper key={index} data={data}>
      {data}
    </Paper>
  ));
  return (
    <>
      <Title title="About" />
      <Vision />
      <AboutNav />
      <h2>인증서</h2>
      <div className="CertificationWrapper">
        <div className="Certification">{CertificationList}</div>
      </div>

      <style jsx>{`
        .CertificationWrapper {
          display: flex;
          margin-bottom: 1em;
          color: #2d3436;
        }
        .Certification {
          display: flex;
          justify-content: space-between;

          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
