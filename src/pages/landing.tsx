import { Topbar } from "../components/topbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import facebook from "@/assets/svg/18493586_5994304.svg";
import twitter from "@/assets/images/X.png";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col h-fit">
      <Topbar />
      <HeroSection />
      <Services />
    </div>
  );
};

export default LandingPage;

import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative bg-white h-[650px] md:min-h-screen flex justify-center px-4 sm:px-6 md:px-10">
      {/* Background glow */}
      <div className="absolute top-[25%] left-[10%] w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] bg-green-400 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-bluelight opacity-20 blur-2xl rounded-full z-0" />

      {/* Floating social media icons */}
      <div className="text-white z-0 pointer-events-none text-base sm:text-lg">
        <div className="absolute top-[14%] md:top-[16%] md:text-lg text-2xl md:left-[26%] left-[20%] text-blue-600 rounded-full">
          <FaTwitter />
        </div>
        <div className="absolute bottom-16 md:top-1/2 h-fit left-[14%] md:left-[20%] p-2 bg-red-600 rounded-full">
          <FaInstagram />
        </div>
        <div className="absolute bottom-4 md:bottom-12 right-[20%] rotate-[30deg] p-3 bg-blue-800 rounded-full">
          <FaLinkedinIn />
        </div>
      </div>

      {/* Hero content */}
      <div className="z-10 text-center w-full sm:w-[90%] md:w-[60%] mt-[30px] md:mt-[80px] flex flex-col gap-3 items-center px-2">
        <h1 className="flex z-20 flex-col mt-[100px] md:mt-[60px] text-bluedark text-[27px] sm:text-[35px] md:text-[48px] leading-[34px] md:leading-[58px] items-center w-full text-center font-bold">
          Empower your brand <br /> with targeted social media growth and real
          engagement.
        </h1>
        <p className="text-[#2B323E] text-sm sm:text-base w-full md:w-[74%] z-20 text-center">
          Get discovered by the right audience faster. Flexible plans to fit
          your growth goals. Secure, effective, and built for serious creators.
          your go to platform to gain followers, and skyrocket engagement.
        </p>
        <div className="flex flex-row justify-center gap-4 mt-5 text-sm w-full sm:w-auto">
          <Link
            to="/signup"
            className="bg-bluelight text-white px-4 md:px-6 py-3 rounded-2xl hover:bg-bluelight/80 duration-150 transition-all"
          >
            Get started
          </Link>
          <button className="bg-greenlight text-white px-4 text-sm md:px-6 py-3 rounded-2xl hover:bg-greenlight/80 duration-150 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

// aservices

const medias = [
  {
    image: facebook,
    title: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit, amet adipisicing elit. Eos officia inventore odit laudantium commodi voluptatum asperiores minus nisi suscipit, est cupiditate aperiam sint harum deleniti, reprehenderit porro reiciendis eaque eveniet.",
  },
  {
    image: twitter,
    title: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit, amet adipisicing elit. Eos officia inventore odit laudantium commodi voluptatum asperiores minus nisi suscipit, est cupiditate aperiam sint harum deleniti, reprehenderit porro reiciendis eaque eveniet.",
  },
  {
    image: facebook,
    title: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit, amet adipisicing elit. Eos officia inventore odit laudantium commodi voluptatum asperiores minus nisi suscipit, est cupiditate aperiam sint harum deleniti, reprehenderit porro reiciendis eaque eveniet.",
  },
  {
    image: facebook,
    title: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit, amet adipisicing elit. Eos officia inventore odit laudantium commodi voluptatum asperiores minus nisi suscipit, est cupiditate aperiam sint harum deleniti, reprehenderit porro reiciendis eaque eveniet.",
  },
  {
    image: facebook,
    title: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit, amet adipisicing elit. Eos officia inventore odit laudantium commodi voluptatum asperiores minus nisi suscipit, est cupiditate aperiam sint harum deleniti, reprehenderit porro reiciendis eaque eveniet.",
  },
  {
    image: facebook,
    title: "Lorem ipsum dolor sit amet",
    info: "Lorem ipsum dolor sit, amet adipisicing elit. Eos officia inventore odit laudantium commodi voluptatum asperiores minus nisi suscipit, est cupiditate aperiam sint harum deleniti, reprehenderit porro reiciendis eaque eveniet.",
  },
];
const Services = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <div className="w-full h-fit md:min-h-screen md:mb-0 mb-[40px] gap-[40px] md:gap-[70px] mt-4 items-center flex flex-col">
      <span className="flex flex-col w-full justify-center items-center">
        <h1 className="font-semibold text-2xl text-bluedark"> Our services</h1>
        <p className="text-sm text-gray-400">
          explore our most demanded services
        </p>
      </span>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-[80%] md:max-w-[75%]"
      >
        <CarouselContent className=" w-full">
          {medias.map((item, i) => (
            <CarouselItem
              key={i}
              className="w-full select-none md:w-fit basis-full md:basis-1/3 h-fit "
            >
              <div className="overflow-hidden w-full ml-2 h-full rounded-lg flex flex-col items-center justify-between border">
                <span className="w-full h-[170px] bg-[#ebebeb] rounded">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-contain h-full select-none"
                  />
                </span>
                <span className="flex flex-col w-full gap-3 p-5">
                  <h2 className="select-none">{item.title}</h2>
                  <p className="text-gray-700 text-sm select-none">
                    {item.info}
                  </p>
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="md:flex hidden" />
        <CarouselPrevious className="md:flex hidden" />
      </Carousel>
    </div>
  );
};
