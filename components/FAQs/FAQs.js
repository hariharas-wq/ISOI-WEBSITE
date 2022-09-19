// Next Imports
import Image from "next/future/image";

// Hooks Imports
import useWindowSize from "../../hooks/useWindowSize";

// Component Imports
import FAQQuestion from "../FAQQuestion/FAQQuestion";

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

          <div className="py-4">
            <FAQQuestion
              question="Who are we?"
              answer="ISOI is an initiative of IISC and one of VIT's most active technical chapters, as well as the University's only Instrumentation Chapter."
            />
          </div>

          <div className="py-4">
            <FAQQuestion
              question="What we do?"
              answer="We intend to keep our peers updated on the latest technological advancements through informative and appealing events, fun trivia, tech talks, and many more."
            />
          </div>

          <div className="py-4">
            <FAQQuestion
              question="How do we do it?"
              answer="We have three main domains: software, hardware, and management. Along with being proficient at technical skills, we help students in honing their communication and editorial skills."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
