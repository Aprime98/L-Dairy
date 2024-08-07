import img from "../assets/About.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="text-slate-800 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-2xl text-xl mb-4 font-semibold text-grass-green underline underline-offset-4">
              About Us
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Learn More About Limuru Dairy.
            </h1>
            <p className="mb-8 leading-relaxed">
              The society collects milk from the members digitally, confirms
              milk parameters and bulks it in coolers strategically located in
              our milk collection zones. The raw milk is transported to our
              factory where it is tested again for quality, weighed, recorded
              and pasteurized.
            </p>
            <div className="flex justify-center">
              <Link spy={true} smooth={true} to="/About">
                <button className="ml-4 inline-flex text-slate-800 bg-gradient-to-b from-love-green to-grass-green border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
