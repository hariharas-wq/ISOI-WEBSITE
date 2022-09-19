// Component Imports
import CounterCard from "../CounterCard/CounterCard";

// Assets Imports
import projects from "../../assets/Count-Projects.svg";
import members from "../../assets/Count-Members.svg";
import workshops from "../../assets/Count-Workshops.svg";
import events from "../../assets/Count-Events.svg";

const CounterSection = () => {
  const data = [
    {
      id: 1,
      src: projects,
      alt: "projects",
      number: 250,
      containsDecimal: false,
      heading: "Projects",
    },
    {
      id: 2,
      src: members,
      alt: "members",
      number: 100,
      containsDecimal: false,
      heading: "Core Members",
    },
    {
      id: 3,
      src: workshops,
      alt: "workshops",
      number: 200,
      containsDecimal: false,
      heading: "Workshops",
    },
    {
      id: 4,
      src: events,
      alt: "events",
      number: 100,
      containsDecimal: false,
      heading: "Events",
    },
  ];
  return (
    <>
      <section className="bg-bluebg">
        <div className="container flex flex-col lg:flex-row justify-center lg:justify-evenly items-center py-20">
          <CounterCard
            src={projects}
            alt={"projects"}
            number={250}
            heading={"Projects"}
          />
          <CounterCard
            src={members}
            alt={"members"}
            number={100}
            heading={"Core Members"}
          />
          <CounterCard
            src={workshops}
            alt={"workshops"}
            number={200}
            heading={"Workshops"}
          />
          <CounterCard
            src={events}
            alt={"events"}
            number={100}
            heading={"Events"}
          />
        </div>
      </section>
    </>
  );
};

export default CounterSection;
