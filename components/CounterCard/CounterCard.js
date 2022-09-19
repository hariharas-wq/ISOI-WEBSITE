// Next Imports
import Image from "next/future/image";

// React CountUp Imports
import CountUp from "react-countup";

const CounterCard = ({ src, alt, number, containesDecimal, heading }) => {
  return (
    <>
      <section className="flex flex-col items-center w-40 py-4">
        <div>
          <Image
            src={src}
            alt={alt}
            width={120}
            height={120}
            draggable={false}
          />
        </div>
        <div className="font-heading text-4xl text-primary font-medium pt-[0.75rem]">
          <CountUp
            startVal={1}
            end={number}
            duration={8}
            decimals={containesDecimal ? 1 : 0}
          />
          +
        </div>
        <div className="font-primary text-primary text-2xl">{heading}</div>
      </section>
    </>
  );
};

export default CounterCard;
