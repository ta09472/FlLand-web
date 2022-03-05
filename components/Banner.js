export default function Banner({ text }) {
  return (
    <>
      <div>{text}</div>
      <style jsx>{`
        div {
          border-bottom: 2px solid #636e72;
          margin-bottom: 1em;
          padding-bottom: 1em;
          width: 8em;
          color: #636e72;
        }
      `}</style>
    </>
  );
}
