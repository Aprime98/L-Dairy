import React from "react";
import medal from "../assets/medal.png";
import vet from "../assets/Vet.jpeg";

const Awards = () => {
  return (
    <div className="bg-cream">
      <div className="w-full xl:max-w-[1250px] mx-auto px-4 text-slate-900">
        <div className="flex flex-col justify-start py-12 space-y-6">
          <div className="">
            <h1 className="text-xl font-roboto text-Dark-Choco font-bold">
              Our Services
            </h1>
            <div className="w-16 h-0.5 bg-forestGreen mt-2" />
            <h4 className="pt-8 text-2xl font-semibold font-Poppins tracking-wide">
              Building a Brighter Future Together:
            </h4>
          </div>

          <div className="flex flex-col  py-8 space-y-16">
            <div className="flex flex-col lg:flex-row justify-center w-full space-x-0 lg:space-x-6 space-y-12 lg:space-y-0">
              <div className="flex space-y-5 lg:space-y-0 flex-col lg:flex-row space-x-8 items-center">
                <div className="rounded-md overflow-hidden w-[210px] h-[180px]">
                  <img className="w-full" src={vet} alt="medal" />
                </div>
                <div className="h-[90px] hidden lg:block w-0.5 bg-grass-green" />
                <div className="flex flex-col w-10/12 lg:max-w-[300px]">
                  <h1 className="text-xl tracking-wide font-semibold font-Poppins text-slate-700">
                    Vet Services
                  </h1>
                  <div className="w-10 h-1 bg-forestGreen rounded-3xl mt-1 mb-4" />
                  <p className="text-base lg:text-sm font-medium font-Poppins">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, exercitationem nam nostrum hic repellendus nihil
                    voluptatem ratione culpa. Alias, iusto sed autem animi
                    numquam eius quaerat consequuntur! Error, id cupiditate.
                  </p>
                </div>
              </div>
              <div className="flex space-y-5 lg:space-y-0 flex-col lg:flex-row space-x-8 items-center">
                <div className="rounded-md overflow-hidden w-[210px] h-[180px]">
                  <img className="w-full" src={vet} alt="medal" />
                </div>
                <div className="h-[90px] hidden lg:block w-0.5 bg-grass-green" />
                <div className="flex flex-col w-10/12 lg:max-w-[300px]">
                  <h1 className="text-xl tracking-wide font-semibold font-Poppins text-slate-700">
                    Vet Services
                  </h1>
                  <div className="w-10 h-1 bg-forestGreen rounded-3xl mt-1 mb-4" />
                  <p className="text-base lg:text-sm font-medium font-Poppins">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, exercitationem nam nostrum hic repellendus nihil
                    voluptatem ratione culpa. Alias, iusto sed autem animi
                    numquam eius quaerat consequuntur! Error, id cupiditate.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="w-[300px] h-0.5 bg-grass-green" /> */}
            <div className="flex flex-col lg:flex-row justify-center w-full space-x-0 lg:space-x-6 space-y-12 lg:space-y-0">
              <div className="flex space-y-5 lg:space-y-0 flex-col lg:flex-row space-x-8 items-center">
                <div className="rounded-md overflow-hidden w-[210px] h-[180px]">
                  <img className="w-full" src={vet} alt="medal" />
                </div>
                <div className="h-[90px] hidden lg:block w-0.5 bg-grass-green" />
                <div className="flex flex-col w-10/12 lg:max-w-[300px]">
                  <h1 className="text-xl tracking-wide font-semibold font-Poppins text-slate-700">
                    Vet Services
                  </h1>
                  <div className="w-10 h-1 bg-forestGreen rounded-3xl mt-1 mb-4" />
                  <p className="text-base lg:text-sm font-medium font-Poppins">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, exercitationem nam nostrum hic repellendus nihil
                    voluptatem ratione culpa. Alias, iusto sed autem animi
                    numquam eius quaerat consequuntur! Error, id cupiditate.
                  </p>
                </div>
              </div>
              <div className="flex space-y-5 lg:space-y-0 flex-col lg:flex-row space-x-8 items-center">
                <div className="rounded-md overflow-hidden w-[210px] h-[180px]">
                  <img className="w-full" src={vet} alt="medal" />
                </div>
                <div className="h-[90px] hidden lg:block w-0.5 bg-grass-green" />
                <div className="flex flex-col w-10/12 lg:max-w-[300px]">
                  <h1 className="text-xl tracking-wide font-semibold font-Poppins text-slate-700">
                    Vet Services
                  </h1>
                  <div className="w-10 h-1 bg-forestGreen rounded-3xl mt-1 mb-4" />
                  <p className="text-base lg:text-sm font-medium font-Poppins">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, exercitationem nam nostrum hic repellendus nihil
                    voluptatem ratione culpa. Alias, iusto sed autem animi
                    numquam eius quaerat consequuntur! Error, id cupiditate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
