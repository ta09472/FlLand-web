import { useState, useEffect, useRef } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Image from "next/image";

export default function Slider() {
  const TOTAL_SLIDES = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  setTimeout(() => {
    nextSlide();
  }, 4000);
  return (
    <div className="wrapper">
      <ArrowBackIosIcon
        style={{ fontSize: 30 }}
        onClick={prevSlide}
        className="btn"
      />
      <div className="Container">
        <div className="SliderContainer" ref={slideRef}>
          <img src="/carousel1.png" />
          <img src="/carousel2.jpeg" />
          <img src="/carousel3.jpeg" />
          <img src="/carousel4.jpg" />
        </div>
      </div>
      <ArrowForwardIosIcon
        style={{ fontSize: 30 }}
        onClick={nextSlide}
        className="btn"
      />
      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: space-around;
          align-items: center;
          animation-duration: 1.5s;
          animation-name: opacity;
        }

        @keyframes opacity {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
        .Container {
          overflow: hidden;
          border-radius: 3px;
        }

        .SliderContainer {
          display: flex;
          width: 1080px;
        }
        img {
          display: block;
          margin: 0 auto;

          width: 100%;
        }
      `}</style>
    </div>
  );
}
