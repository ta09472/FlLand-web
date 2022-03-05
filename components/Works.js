import Card from "../components/Card";
import Link from "next/link";

export default function Works() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const carList = list.map((data, index) => (
    <Link key={index} href={`/works/${index}`}>
      <a>
        <Card data={data}>{data}</Card>
      </a>
    </Link>
  ));
  return (
    <>
      <div className="Works">{carList}</div>
      <style jsx>{`
        .Works {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
