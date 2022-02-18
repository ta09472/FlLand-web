import Carousel from "../components/Carousel";
import Introduction from "../components/Introduction";
import Title from "../components/Title";
import Works from "../components/Works";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const isMobile = useMediaQuery({
    query: "(min-width : 900px) ",
  });
  return (
    <>
      <div className="main-wrapper">
        <Title title="Home" />
        <div>
          <Carousel />
          <Introduction />
          <Works />
        </div>
      </div>
    </>
  );
}
