import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { IoMdCall } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition bg-slate-700 text-white">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-900 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/Products">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-900 hover:rounded">
              Products
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-900 hover:rounded">
              About Us
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="bg-slate-800 text-grass-green h-[4rem] lg:py-5 lg:px-20 py-4 flex justify-between flex-1 items-center">
        <div className="flex items-center justify-start flex-1 space-x-2">
          <span className="text-xl">
            <IoMdCall />
          </span>
          <h1 className="text-white">Call: 020 2010611</h1>
        </div>

        <div className="flex items-center justify-end flex-1 space-x-2">
          <span className="text-xl">
            <MdOutlineAttachEmail />
          </span>
          <h1 className="text-white">Email: limurudairy@gmail.com</h1>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-cyan-500/55 h-[4rem] flex justify-between z-50 text-slate-900 lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <Link spy={true} smooth={true} to="/">
            <img
              className="w-20 lg:w-24 h-12 lg:h-[54px]"
              src={logo}
              alt="logo Img"
            />
          </Link>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="/">
                <li className="hover:text-love-green transition border-b-2 border-love-green hover:border-grass-green cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/Products">
                <li className="hover:text-love-green transition border-b-2 border-love-green hover:border-grass-green cursor-pointer">
                  Products
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/About">
                <li className="hover:text-love-green transition border-b-2 border-love-green hover:border-grass-green cursor-pointer">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>

        <button
          className="sm:hidden transition text-2xl block z-50"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
