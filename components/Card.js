export default function Card({ data }) {
  return (
    <>
      <div className="Card">{data}</div>
      <style jsx>{`
        .Card {
          border-radius: 3px;
          background-color: silver;
          width: 26em;
          height: 22em;
          margin: 1em 0;
          transition: transform 700ms;
        }

        .Card:hover {
          transition: 500ms;
          transform: translateY(-5px);
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 12px rgba(0, 0, 0, 0.19);
          opacity: 0.7;
          transition-timing-function: ease-in-out;
        }
      `}</style>
    </>
  );
}
