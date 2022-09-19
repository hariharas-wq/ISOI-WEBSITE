// Next Imports
import Image from "next/future/image";

// Hooks Imports
import useWindowSize from "../../hooks/useWindowSize";

// Icons Imports
import Line from "../../icons/Line";

// Color JSON Imports
import colors from "../../styles/colors.json";

const FAQs = () => {
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
              FAQs
            </h1>
            <Line
              color={colors.primary}
              isSmall={size.width <= 764 ? true : false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
