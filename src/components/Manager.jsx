import React from "react";
import managerImg from "../assets/Manager.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Manager = () => {
  return (
    <div className="w-full xl:max-w-[1250px] mx-auto px-4 text-slate-900">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 py-12 space-x-0 lg:space-x-8">
        <div className="rounded-lg overflow-hidden w-full">
          <img src={managerImg} alt="Image" />
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h1 className="font-semibold font-Poppins text-3xl lg:text-4xl text-center text-grass-green/80">
            What We Believe In:
          </h1>
          <div className="flex space-x-2">
            <span className="text-xl lg:text-4xl">
              <RiDoubleQuotesL />
            </span>
            <p className="text-2xl lg:text-3xl font-Edu max-w-[900px] lg:pt-4 lg:pl-3"> 
              We believe in building a sustainable partnership with our farmers
              through trust and fairness. By supporting them at every step, we
              ensure mutual growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
