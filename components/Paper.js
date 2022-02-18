export default function Paper({ data }) {
  return (
    <>
      <div className="Certification">{data}</div>
      <style jsx>
        {`
          .Certification {
            height: 40vh;
            width: 16vw;
            margin-top: 1em;
            background-color: gold;
          }
        `}
      </style>
    </>
  );
}
