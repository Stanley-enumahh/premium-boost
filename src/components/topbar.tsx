import { Link, NavLink } from "react-router-dom";
import { Logo } from "./logo";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/solutions", label: "solutions" },
  { to: "/pricing", label: "pricing" },
];

export const Topbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        scrolled
          ? "bg-white/90 backdrop-blur-xl w-full"
          : "md:bg-transparent w-full"
      } w-full flex justify-center z-50 fixed top-0 left-0`}
    >
      <div className="flex flex-row items-center relative justify-between w-[90%] md:w-[86%] h-[60px] mt-0 md:mt-4">
        <Logo />

        <ul
          className={`flex flex-col w-full md:p-0 p-5 md:bg-transparent bg-white md:items-center items-end md:flex-row gap-3 transition-all duration-150 z-40 md:gap-5 h-fit md:static absolute left-0 md:w-fit ${
            isOpen ? "top-[65px]" : "top-[-200px]"
          }`}
        >
          <p className="flex px-4 py-1 text-gray-800 md:text-black items-center capitalize gap-4 flex-row text-sm">
            About us
          </p>
          {navLinks.map((item) => (
            <NavLink
              to={item.to}
              key={item.label}
              className={({ isActive }) =>
                isActive
                  ? "flex px-4 py-1 duration-150 capitalize transition-all text-bluedark green-100 text-sm items-center gap-3 "
                  : "flex px-4 py-1 text-gray-800 md:text-black items-center capitalize  gap-3 flex-row text-sm"
              }
            >
              <p>{item.label}</p>
            </NavLink>
          ))}
          <Link
            to="/login"
            className="bg-black px-5 ml-4 h-fit py-2 text-sm rounded-[10px] text-white"
          >
            Login
          </Link>
        </ul>

        <BiMenu
          onClick={() => setIsOpen((s) => !s)}
          className=" w-fit z-50 text-lg absolute right-0 md:hidden flex"
        />
      </div>
    </div>
  );
};
