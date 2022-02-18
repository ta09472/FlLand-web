export default function Footer() {
  return (
    <>
      <div className="Footer">
        <p>TEL : 010-000-0000</p>
        <p>FAX : 010-000-0000</p>
        <p>E-Mail : abc@email.com</p>
        <p>Location : 전라북도 전주시 </p>
      </div>
      <style jsx>{`
        .Footer {
          border-top: 1px solid black;
          padding-top: 1em;
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
}
