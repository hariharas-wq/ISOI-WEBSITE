// Next Imports
import Image from "next/future/image";

// Hooks Imports
import useWindowSize from "../../hooks/useWindowSize";

// Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Icons Imports
import Line from "../../icons/Line";

// Color JSON Imports
import colors from "../../styles/colors.json";

// Asset Import
import Gal1 from "../../assets/Gal1.png";
import Gal2 from "../../assets/Gal2.png";
import Gal3 from "../../assets/Gal3.png";
import Gal4 from "../../assets/Gal4.png";
import Gal5 from "../../assets/Gal5.png";
import Gal6 from "../../assets/Gal6.png";
import Gal7 from "../../assets/Gal7.png";
import Gal8 from "../../assets/Gal8.png";
import Gal9 from "../../assets/Gal9.png";
import Gal10 from "../../assets/Gal10.png";
import Gal11 from "../../assets/Gal11.png";
import Gal12 from "../../assets/Gal12.png";

const PhotoGallery = () => {
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
      <section className="py-20 bg-tert">
        <div className="container">
          <div className="flex justify-center items-center  pb-16">
            <Line
              color={colors.primary}
              isSmall={size.width <= 764 ? true : false}
            />
            <h1 className="text-2xl lg:text-4xl text-center text-primary px-2 lg:px-4">
              PHOTO GALLERY
            </h1>
            <Line
              color={colors.primary}
              isSmall={size.width <= 764 ? true : false}
            />
          </div>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal1} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal2} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal3} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal4} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal5} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal6} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal7} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal8} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal9} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal10} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal11} alt="Event" draggable={false} />
            </div>
            <div className="w-[90%] m-auto flex justify-center items-center">
              <Image src={Gal12} alt="Event" draggable={false} />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
