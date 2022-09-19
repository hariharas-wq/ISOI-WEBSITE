// Next Imports
import Image from "next/future/image";

// Components Imports
import Header from "../Header/Header";

// Assets Import
import Background from "../../assets/Background.svg";
import bullet from "../../assets/Bullet.svg";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-screen min-h-screen md:h-screen bg-bluebg z-0 overflow-x-hidden">
        <div className="container h-full overflow-hidden">
          <Image
            src={Background}
            alt="Background"
            layout="raw"
            className="absolute inset-0 min-h-full min-w-full max-h-full max-w-full object-cover z-10 opacity-20 overflow-hidden"
            draggable="false"
          />

          <div className="relative z-20 w-full h-full">
            <Header />

            <div className="w-full h-[80%] flex flex-col justify-between">
              <div className="my-auto pb-8">
                <h1 className="font-heading text-5xl font-semibold text-primary text-center py-6">
                  Instrumentation Society of India
                </h1>

                <h2 className="font-primary text-3xl font-normal text-secondary text-center">
                  The Chapter of VIT
                </h2>
              </div>

              <div>
                <div className="w-full flex justify-center items-center mb-20">
                  <div className="flex flex-col lg:flex-row lg:justify-between items-center w-[60%]">
                    <h3 className="font-primary text-3xl font-normal text-primary">
                      Extraordinary{" "}
                    </h3>
                    <Image
                      src={bullet}
                      alt="Bullet"
                      layout="fixed"
                      width={12}
                      height={12}
                      draggable={false}
                    />
                    <h3 className="font-primary text-3xl font-normal text-primary">
                      Technomaniacs{" "}
                    </h3>
                    <Image
                      src={bullet}
                      alt="Bullet"
                      layout="fixed"
                      width={12}
                      height={12}
                      draggable={false}
                    />
                    <h3 className="font-primary text-3xl font-normal text-primary">
                      Prestigious{" "}
                    </h3>
                  </div>
                </div>

                <p className="italic font-primary text-xl text-primary text-center w-[80%] mx-auto font-medium">
                  &quot;Imagination is more important than knowledge. For
                  knowledge is limited, whereas imagination embraces the entire
                  world, stimulating progress, giving birth to evolution.&quot;
                </p>
                <p className="font-primary text-xl text-primary text-center pt-4 pb-8 font-medium">
                  ~Albert Einstein
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
