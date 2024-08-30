import React from "react";
import { FaStar } from "react-icons/fa";
import { FcReadingEbook } from "react-icons/fc";

const AboutUs = () => {
  return (
    <div className="bg-cream">
      {/* stats */}
      <div className="w-full space-y-4 space-x-0 lg:space-x-16 lg:space-y-0 xl:max-w-[1250px] mx-auto py-24 flex justify-center items-center flex-col lg:flex-row">
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-roboto font-medium text-3xl tracking-wide">
            2,000+
          </h1>
          <p className="font-roboto text-xl tracking-wide text-forestGreen ">
            Farmers.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-roboto font-medium text-3xl tracking-wide">
            10,000+
          </h1>
          <p className="font-roboto text-lg tracking-wide text-forestGreen">
            Litres of Fresh milk Daily.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <h1 className="font-roboto font-medium text-3xl tracking-wide">
            20+
          </h1>
          <p className="font-roboto text-xl text-forestGreen tracking-wide">
            Years of Farmers Service.
          </p>
        </div>
      </div>

      {/* about us */}
      <div className="w-full xl:max-w-[1250px] space-y-6 lg:space-y-0 mx-auto flex flex-col lg:flex-row px-4 pb-24">
        <div className="text-center lg:text-start">
          <h1 className="font-Poppins text-4xl lg:text-6xl mb-4 lg:font-roboto font-medium">
            You Focus on Farming, We Handle the Rest.
          </h1>
          <p className="font-Edu text-2xl lg:text-3xl max-w-[600px] text-slate-800">
            " While farmers concentrate on their work, Limuru Dairy manages fair
            pricing, timely payments, and market access, creating a seamless
            partnership that lets farmers thrive with confidence."
          </p>
        </div>

        <div className="lg:flex flex-col space-y-6 lg:space-y-6">
          <div className="flex space-x-6 hover:bg-grass-green/40 p-4 rounded-xl">
            {/* icon */}
            <div className="p-2">
              <FaStar
                color="white"
                className="bg-NavyBlue/70 w-[50px] h-[50px] p-2 rounded-full"
              />
            </div>
            {/* data */}
            <div className="flex flex-col space-y-2">
              <h1 className="font-Poppins text-xl">Reliable Payment!</h1>
              <p className="font-roboto text-lg text-slate-800">
                Limuru Dairy guarantees timely and transparent payments, giving
                farmers financial security and fostering trust in their business
                relationship.
              </p>
            </div>
          </div>

          <div className="flex space-x-6 hover:bg-grass-green/40 p-4 rounded-xl">
            {/* icon */}
            <div className="p-2">
              <FcReadingEbook className="bg-NavyBlue/70 w-[55px] h-[55px] p-1 rounded-full" />
            </div>
            {/* data */}
            <div className="flex flex-col space-y-2">
              <h1 className="font-Poppins text-xl">Support and Training!</h1>
              <p className="font-roboto text-lg text-slate-800">
                Limuru dairy offers ongoing training and technical assistance to
                farmers, helping them improve and increase production.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-NavyBlue px-3 py-2 rounded-md text-white font-roboto font-semibold">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
