import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src="/imgs/slide1.jpg" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/imgs/slide2.jpg" text="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
