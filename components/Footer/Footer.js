// Next Imports
import Image from "next/future/image";

// Asset Imports
import logo from "../../assets/Logo-White.svg";
import Location from "../../assets/Footer-Location.svg";
import Mail from "../../assets/Footer-Mail.svg";
import Phone from "../../assets/Footer-Phone.svg";
import Youtube from "../../assets/Footer-Youtube.svg";
import LinkedIn from "../../assets/Footer-LinkedIn.svg";
import Instagram from "../../assets/Footer-Insta.svg";
import Facebook from "../../assets/Footer-Facebook.svg";

const Footer = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row w-full justify-between">
            <div className="lg:w-[30%] flex justify-center items-center py-6">
              <Image
                src={logo}
                alt="ISOI-VIT"
                layout="fixed"
                width={150}
                height={58}
                draggable="false"
              />
            </div>

            <div className="lg:w-[30%] py-6">
              <h1 className="text-white text-3xl font-primary py-4 text-center">
                CONTACT US
              </h1>

              <div className="flex w-full text-tert font-primary py-2">
                <div className="w-[15%] flex justify-center items-center">
                  <Image
                    src={Location}
                    alt={"Location Icon"}
                    layout="fixed"
                    width={40}
                    height={40}
                    draggable="false"
                  />
                </div>
                <div className="w-[85%] flex items-center pl-4">
                  Vellore Institute of Technology Gorbachev Road, Vellore
                  -632014 Tamilnadu - India
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-[15%] flex justify-center items-center">
                  <Image
                    src={Mail}
                    alt={"Mail Icon"}
                    layout="fixed"
                    width={40}
                    height={40}
                    draggable="false"
                  />
                </div>
                <div className="w-[85%] flex items-center pl-4 text-tert font-primary">
                  <a href="mailto:isoivitvellore@gmail.com">
                    isoivitvellore@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-[15%] flex justify-center items-center">
                  <Image
                    src={Phone}
                    alt={"Phone Icon"}
                    layout="fixed"
                    width={40}
                    height={40}
                    draggable="false"
                  />
                </div>
                <div className="w-[85%] flex items-center pl-4 text-tert font-primary">
                  <a href="tel:+919876543210">9876543210</a>
                </div>
              </div>
            </div>

            <div className="lg:w-[30%] flex flex-col justify-center py-6">
              <h1 className="text-white text-3xl font-primary py-4 text-center">
                Follow us on:
              </h1>
              <div className="flex justify-evenly">
                <Image src={Youtube} alt={"Youtube"} width={40} height={40} />
                <Image src={LinkedIn} alt={"LinkedIn"} width={40} height={40} />
                <Image
                  src={Instagram}
                  alt={"Instagram"}
                  width={40}
                  height={40}
                />
                <Image src={Facebook} alt={"Facebook"} width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-copyright py-2 text-white text-center font-primary text-sm">
        All Rights Reserved {new Date().getFullYear()} ©ISOI-VIT
      </section>
    </>
  );
};

export default Footer;
