// Next Imports
import Image from "next/future/image";

// Hooks Imports
import useWindowSize from "../../hooks/useWindowSize";

// Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Asset Imports
import EventImg from "../../assets/Event-Img.svg";

// Icons Imports
import Line from "../../icons/Line";

const EventSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  let size = useWindowSize();

  return (
    <>
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="flex justify-center items-center  pb-16">
            <Line color={"white"} isSmall={size.width <= 764 ? true : false} />
            <h1 className="text-2xl lg:text-4xl text-center text-white px-2 lg:px-4">
              EVENTS
            </h1>
            <Line color={"white"} isSmall={size.width <= 764 ? true : false} />
          </div>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="w-[80%] m-auto">
                <Image src={EventImg} alt="Event" draggable={false} />
              </div>
              <h1 className="font-primary text-white text-xl lg:text-2xl text-center">
                E1
              </h1>
            </div>
            <div>
              <div className="w-[80%] m-auto">
                <Image src={EventImg} alt="Event" draggable={false} />
              </div>
              <h1 className="font-primary text-white text-xl lg:text-2xl text-center">
                E2
              </h1>
            </div>
            <div>
              <div className="w-[80%] m-auto">
                <Image src={EventImg} alt="Event" draggable={false} />
              </div>
              <h1 className="font-primary text-white text-xl lg:text-2xl text-center">
                E3
              </h1>
            </div>
            <div>
              <div className="w-[80%] m-auto">
                <Image src={EventImg} alt="Event" draggable={false} />
              </div>
              <h1 className="font-primary text-white text-xl lg:text-2xl text-center">
                E4
              </h1>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default EventSection;
