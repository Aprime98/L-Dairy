import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-700">
      <div className="w-full xl:max-w-[1250px] mx-auto px-4 text-white">
        <div className="flex flex-col justify-center items-center flex-1 py-24 lg:py-12 space-y-6 lg:space-y-8">
          <div className="font-bold font-roboto text-xl lg:text-2xl">GET IN TOUCH</div>

          <div className="text-xl lg:text-lg flex flex-col lg:flex-row justify-center items-center flex-1 gap-4 font-Montserrat tracking-normal">
            <div className="flex flex-col justify-center space-y-2 items-center">
              <span className="text-2xl">
                <FaLocationDot />
              </span>
              <h1 className="text-center">
                Address: Limuru East banana road <br />
                Maziwa House, Limuru Town.
              </h1>
            </div>

            <div className="w-44 h-0.5 bg-white"></div>

            <div className="flex flex-col justify-center space-y-2 items-center">
              <span className="text-2xl">
                <IoCall />
              </span>
              <h1 className="text-center">Call: 020 2010611</h1>
            </div>

            <div className="w-44 h-0.5 bg-white"></div>

            <div className="flex flex-col justify-center space-y-2 items-center">
              <span className="text-2xl">
                <MdOutlineAttachEmail />
              </span>
              <h1 className="text-center">Email: limurudairy@gmail.com</h1>
            </div>
          </div>

          <div className="w-4/5 h-[1px] bg-slate-300"></div>
          <div className="font-bold text-xl lg:text-2xl font-roboto">FOLLOW US</div>
          <div className="flex flex-1 items-center justify-center gap-4 text-2xl text-slate-800 bg-white py-3 px-4 rounded-md">
            <div className="">
              <FaFacebookSquare />
            </div>
            <div className="">
              <TiSocialInstagram />
            </div>
            <div className="">
              <FaSquareXTwitter />
            </div>
          </div>

          <div className="w-4/5 h-[1px] bg-slate-300"></div>
          <div className="container px-5 pt-8 mx-auto flex items-center sm:flex-row flex-col lg:flex lg:justify-center font-roboto">
            <p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 hidden lg:block">L.Dairy</p>
            <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2024 Limuru Dairy — Farmers Co-Operative Society
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
