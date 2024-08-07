import { useTypewriter, Cursor } from "react-simple-typewriter";
import vid from "../assets/Cows Eat.mp4";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["KARIBU!", "KARIBU!"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 80,
  });

  return (
    <div className="bg-gradient-to-b lg:bg-gradient-to-r from-white to-cyan-500">
      <div className="w-full xl:max-w-[1250px] mx-auto px-4 pb-4 lg:pb-0">
        <div className="flex flex-col xl:flex-row xl:h-100vh items-center pt-[5rem] w-full">
          <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center text-slate-900 text-center xl:text-start space-y-4 xl:space-y-8 mb-[4rem]">
            <h1 className="text-grass-green font-extrabold text-5xl w-full xl:w-[32rem]">
              Limuru Dairy Farmers Co-operative Society Ltd.
            </h1>
            <h1 className="font-bold text-2xl text-[#e87d0e] w-full xl:w-[30rem] text-center">
              Discover the taste of purity and the promise of quality in every
              sip and bite..
            </h1>
            <p className="text-sm text-center w-full xl:w-[30rem]">
              In the lush, rolling hills of Limuru, where the air is fresh and
              the pastures are green, lies a hidden gem of Kenyan agriculture:{" "}
              <br />
              <span className="text-grass-green font-semibold">
                {typeEffect}
              </span>{" "}
              Limuru Dairy.
            </p>
          </div>

          {/* video */}
          <div className="flex items-center justify-center flex-1 h-full">
            {/* <video src={vid}></video> */}
            <video className="h-full w-full rounded-lg" muted autoPlay loop>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
