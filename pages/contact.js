import Title from "../components/Title";
export default function Contact() {
  return (
    <>
      <Title title="Contact" />
      <div>Contact</div>
      <div className="Map"></div>
      <style jsx>{`
        .Map {
          height: 40em;
          background-color: silver;
        }
      `}</style>
    </>
  );
}
