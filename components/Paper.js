export default function Paper({ data }) {
  return (
    <>
      <div className="Certification">{data}</div>
      <style jsx>
        {`
          .Certification {
            height: 28em;
            width: 24em;
            max-width: 24em;
            margin-top: 1em;
            background-color: silver;
          }
        `}
      </style>
    </>
  );
}
