export default function Introduction() {
  return (
    <div className="Introduction">
      <h1>안녕하세요 페스티벌 랜드입니다.</h1>
      <p>
        아름다움으로 세상을 바꿉니다. <br />
        공간 안의 모든 요소가 고객의 아이덴티티와 연결되도록 세심하게
        디자인합니다. <br />이 과정에서 고객의 요청에 따라 브랜드 디자인부터
        컨설팅, 건축, 조경, 운영에 이르기까지 확장 영역에서 다양한 업무를
        수행하고 있습니다.
        <br /> 이를 통해 보다 전체적인 시각으로 고객의 필요를 읽고 적합한
        솔루션을 제공합니다.
      </p>
      <div className="Intro">Works</div>
      <style jsx>{`
        p,
        h1 {
          animation-duration: 2s;
          animation-name: textSlide;
          color: #2d3436;
        }

        @keyframes textSlide {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
        .Intro {
          font-size: 2em;
          border-bottom: 2px solid #2d3436;
          padding-bottom: 0.3em;
          margin-bottom: 0.3em;
          color: #2d3436;
        }
        .Introduction {
          animation-duration: 4s;
          animation-name: textSlide;
        }
      `}</style>
    </div>
  );
}
