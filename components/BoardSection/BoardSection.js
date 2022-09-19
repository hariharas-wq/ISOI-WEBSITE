// Next Imports
import Image from "next/future/image";

// Component Imports
import BoardCard from "../BoardCard/BoardCard";

// Hooks Imports
import useWindowSize from "../../hooks/useWindowSize";

// Asset Imports
import Prajjwal from "../../assets/Prajjwal.jpeg";
import Monalisa from "../../assets/Monalisa.jpg";
import Akshit from "../../assets/Akshit.jpeg";
import Mudit from "../../assets/Mudit.jpeg";
import Mahek from "../../assets/Mahek.jpeg";
import Yuvraj from "../../assets/Yuvraj.jpeg";
import Abhishek from "../../assets/Abishek.jpeg";
import Sai from "../../assets/Sai.jpeg";
import Amal from "../../assets/Amal.jpeg";
import Osman from "../../assets/Osman.jpeg";

// Icons Imports
import Line from "../../icons/Line";

// Color JSON Imports
import colors from "../../styles/colors.json";

const BoardSection = () => {
  let size = useWindowSize();

  const boardData = [
    {
      id: 1,
      src: Prajjwal,
      name: "Prajjwal Singh",
      desigination: "Chairperson",
    },
    {
      id: 2,
      src: Monalisa,
      name: "Monalisa Maiti",
      desigination: "Vice Chairperson",
    },
    {
      id: 3,
      src: Akshit,
      name: "Akshit Negi",
      desigination: "Secretary",
    },
    {
      id: 4,
      src: Mudit,
      name: "Mudit Khandelwal",
      desigination: "Co-Secretary",
    },
    {
      id: 5,
      src: Mahek,
      name: "Tiwari Mahek Akhilesh",
      desigination: "Events Head",
    },
    {
      id: 6,
      src: Yuvraj,
      name: "Yuvraj Singh Deora",
      desigination: "Technical Head",
    },
    {
      id: 7,
      src: Abhishek,
      name: "Abishek",
      desigination: "Design Head",
    },
    {
      id: 8,
      src: Sai,
      name: "Sai Prasath S",
      desigination: "Projects Head",
    },
    {
      id: 9,
      src: Amal,
      name: "Muhammed Amal Jas",
      desigination: "Publicity and Marketing Head",
    },
    {
      id: 10,
      src: Osman,
      name: "Mohamed Osman Zaid K B",
      desigination: "Human Resource Head",
    },
  ];

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          <div className="flex justify-center items-center  pb-16">
            <Line
              color={colors.white}
              isSmall={size.width <= 764 ? true : false}
            />
            <h1 className="text-2xl lg:text-4xl text-center text-white px-2 lg:px-4">
              BOARD
            </h1>
            <Line
              color={colors.white}
              isSmall={size.width <= 764 ? true : false}
            />
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between">
            {boardData.map((item) => {
              return (
                <>
                  <div className="my-4" key={item.id}>
                    <BoardCard
                      src={item.src}
                      alt={item.name}
                      name={item.name}
                      designation={item.desigination}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardSection;
