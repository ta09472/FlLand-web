import Title from "../components/Title";
import Banner from "../components/Banner";
export default function Contact() {
  return (
    <>
      <Title title="Contact" />
      <Banner text="찾아오시는 길" />
      <div className="Map"></div>
      <style jsx>{`
        .Map {
          height: 40em;
          background-color: silver;
          margin-bottom: 1em;
        }
      `}</style>
    </>
  );
}
