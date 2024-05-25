import React from "react";
import VentrixLogo from "../../assets/x.svg";
import VentrixTextLogo from "../../assets/typography.svg";

const Hero = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover h-[95vh] lg:h-screen px-10 md:px-12 select-none flex flex-col justify-between bg-center bg-opacity-50"
        style={{
          backgroundImage: `url(${"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/L2Jt5vTTMCwVwOStass0"})`,
        }}
      >
        <div className="">
          {/* navigation bar */}
          <div className="flex justify-center md:justify-start items-center py-8 gap-3">
            <img src={VentrixLogo} alt="" className="w-10 animate-spin" />
            <img src={VentrixTextLogo} alt="" className="w-52" />
          </div>

          {/* hero section */}
          <div className="text-white mt-2 md:mt-6">
            <h1 className="md:hidden text-[1.6rem] font-bold">
              Modular Carbon Capture for a Sustainable Tomorrow
            </h1>
            <h1 className="hidden md:flex text-[2.3rem] font-bold">
              Modular Carbon Capture for a
              <br /> Sustainable Tomorrow
            </h1>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-end pt-7 pb-12 items-center">
          <a
            href="#contact"
            className="flex items-center justify-center font-light"
          >
            <p className="text-xl">Discover</p>

            {/* Down arrow svg */}
            <svg
              width="12"
              height="14"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-mb-1 ml-2"
            >
              <path
                d="M4.75 1L4.75 10.0882M4.75 10.0882L8.5 6.68011M4.75 10.0882L1 6.68011"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
