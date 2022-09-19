// Next Imports
import Image from "next/future/image";

// Hooks Imports
import useWindowSize from "../../hooks/useWindowSize";

// Assets Imports
import ISOILogo from "../../assets/About-Us-ISOI-Logo.svg";
import ISOIVITLogo from "../../assets/About-Us-ISOI-VIT-Logo.svg";

// Icons Imports
import Line from "../../icons/Line";

// Color JSON Imports
import colors from "../../styles/colors.json";

const AboutUs = () => {
  let size = useWindowSize();
  return (
    <>
      <section className="relative w-screen min-h-screen font-primary text-white bg-primary">
        <div className="container relative h-full py-20">
          <div className="flex justify-center items-center pb-10 lg:pb-16">
            <Line
              color={colors.white}
              isSmall={size.width <= 764 ? true : false}
            />
            <h1 className="text-2xl lg:text-4xl text-center text-white px-2 lg:px-4">
              ABOUT US
            </h1>
            <Line
              color={colors.white}
              isSmall={size.width <= 764 ? true : false}
            />
          </div>
          <div className="lg:flex m-4 shadow-lg px-6 pb-4">
            <div className="w-[80%] lg:w-auto lg:min-w-[20%] h-auto px-4 py-4 mx-auto flex justify-center items-center">
              <Image src={ISOILogo} alt="ISOI Logo" draggable="false" />
            </div>
            <div className="text-sm font-thin pl-4">
              <h2 className="text-xl lg:text-3xl text-center lg:text-left py-4">
                ABOUT ISOI
              </h2>
              <p className="text-tert text-justify lg:text-left">
                The Society of Instrumentation professionals was established in
                the year 1970, with head quarters at Indian Institute of
                Science, Bangalore. It strives to act as a link between academic
                institutions and the instrumentation industry, by organising
                several programs. It also conducts programs for students and
                working professionals in the form of short term courses,
                symposia and topical reviews. The objectives of thee Society
                shall be the following:
              </p>
              <p className="text-tert text-justify lg:text-left">
                -&gt; To provide a forum for pooling the knowledge and
                experience of individuals, participants from scientific
                institutions and industrial organizations interested in
                promoting development of instruments and instrumentation
                systems.
              </p>
              <p className="text-tert text-justify lg:text-left">
                -&gt; To act as an exchange bureau for dissemination of
                technical information by way of periodic and special
                publications, appraising the technical and scientific personnel
                in the industries as well as in research institutions, of the
                requirements in the field of instrumentation by the industries
                and the educational and scientific institutions mutually.
              </p>
              <p className="text-tert text-justify lg:text-left">
                -&gt; To organize liaison between interested entrepreneurs with
                technical problems in their instrumentation activities and the
                experts who offer to act as consultants.
              </p>
              <p className="text-tert text-justify lg:text-left">
                -&gt; To engage in such activities as shall contribute towards
                promoting instrumentation activities.
              </p>
            </div>
          </div>

          <div className="lg:flex m-4 shadow-lg px-6 pt-4 pb-8">
            <div className="w-[80%] lg:w-auto lg:min-w-[20%] h-auto px-4 py-4 mx-auto flex justify-center items-center">
              <Image src={ISOIVITLogo} alt="ISOI Logo" draggable="false" />
            </div>
            <div className="text-sm font-thin pl-4">
              <h2 className="text-xl lg:text-3xl text-center lg:text-left py-4">
                ABOUT ISOI-VIT
              </h2>
              <p className="text-tert text-justify lg:text-left">
                The Instrument Society of India ISOI-VIT.
              </p>
              <p className="text-tert text-justify lg:text-left">
                ISOI is an initiative of IISC and one of VIT&apos;s most active
                technical chapters, as well as the University&apos;s only
                Instrumentation Chapter.
              </p>
              <p className="text-tert text-justify lg:text-left">
                We intend to keep our peers updated on the latest technological
                advancements through informative and appealing events, fun
                trivia, tech talks, and many more.
              </p>
              <p className="text-tert text-justify lg:text-left">
                We have three main domains: software, hardware, and management.
                Along with being proficient at technical skills, we help
                students in honing their communication and editorial skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
