import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./CarouselStyle.css";
import { CarouselData } from "../../utils/constants/projects_data";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const TechCarousel = () => {
  return (
    <Carousel
      className="carousel-container"
      //   swipeable={true}
      //   draggable={true}
      //   showDots={true}
      responsive={responsive}
      ssr={false} // This enables server-side rendering.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {CarouselData.map((val, index) => {
        return (
          <CarouselItem
            key={index}
            iconSource={val.iconSource}
            title={val.title}
          />
        );
      })}
    </Carousel>
  );
};

function CarouselItem({ title, iconSource }) {
  console.log(iconSource);
  return (
    <div className="carousel-item">
      <img className="item-image" src={iconSource} alt={title} />
      <span>{title}</span>
    </div>
  );
}
