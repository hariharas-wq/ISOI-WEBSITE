// Next Imports
import Image from "next/future/image";

// React Imports
import { useState } from "react";

// Asset Imports
import chevron from "../../assets/Chevron.svg";

const FAQQuestion = ({ question, answer }) => {
  const [chevronAnimation, setChevronAnimation] = useState(
    "absolute rotate-0 duration-300"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(
    "hidden transition ease-in-out duration-300 ml-8 py-2 font-primary font-medium"
  );

  const expander = () => {
    if (!isOpen) {
      setChevronAnimation("absolute rotate-90 duration-300");
      setShowAnswer(
        "block transition ease-in-out duration-300 ml-8 py-2 font-primary font-medium"
      );
      setIsOpen(true);
    } else if (isOpen) {
      setChevronAnimation("absolute rotate-0 duration-300");
      setShowAnswer(
        "hidden transition ease-in-out duration-300 ml-8 py-2 font-primary font-medium"
      );
      setIsOpen(false);
    }
  };

  return (
    <>
      <section
        className="w-full rounded-md shadow-md py-4 px-6 cursor-pointer"
        onClick={expander}
      >
        <div className="flex">
          <div className={chevronAnimation}>
            <Image
              src={chevron}
              alt={"Chevron"}
              width={25}
              height={25}
              draggable={false}
            />
          </div>
          <div className="ml-8 font-primary font-medium">{question}</div>
        </div>
        <div className={showAnswer}>{answer}</div>
      </section>
    </>
  );
};

export default FAQQuestion;
