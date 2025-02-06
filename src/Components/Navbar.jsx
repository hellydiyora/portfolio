import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { social } from "../data";

const Navbar = () => {
  const { theme, onChange } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      style={{
        boxShadow:
          theme === "light"
            ? "0 4px 6px rgba(115, 115, 115, 0.15)"
            : "0 4px 6px rgba(229, 229, 229, 0.15)",
      }}
      className={`font-poppins bg-[#A59D84] dark:bg-slate-950 text-[#3C2A21] dark:text-white grid grid-cols-[80%_10%_10%] md:grid-cols-[30%_55%_10%_5%] items-center py-3 px-6 fixed top-0 left-0 z-50 drop-shadow-lg transition-all duration-300 w-full ${
        isScrolled
          ? "dark:bg-transparent bg-transparent backdrop-blur-lg bg-opacity-70 text-[#3C2A21]"
          : "bg-[#A59D84] dark:bg-slate-950"
      }`}
    >
      <Link to="/" className="">
        <p className="text-5xl  font-bold dark:text-white  transition text-[#3C2A21]">
          <span className="hover:opacity-70">HD </span>
        </p>
      </Link>
      <ul className="text-xl font-serif hidden md:grid grid-cols-[25%_25%_25%_25%] text-black justify-items-start">
        {["about", "resume", "projects", "contact"].map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={`/${item}`}
              className="dark:text-white capitalize text-[#3C2A21] hover:opacity-70 transition"
            >
              {item}
              <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] w-0 bg-gray-500 dark:bg-gray-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className=" hidden md:grid grid-cols-2 gap-1  justify-items-end text-[#3C2A21]  dark:text-white ">
        {social.map((item, index) => {
          const IconComponent = item.tag;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="transition hover:opacity-50"
            >
              <IconComponent fontSize="large" />
            </a>
          );
        })}
      </div>
      <div
        onClick={toggleMenu}
        className="visible md:hidden justify-self-end cursor-pointer
         text-[#3C2A21]  dark:text-white"
      >
        {isMenuOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
      <div
        onClick={onChange}
        className="cursor-pointer justify-self-start pl-3 md:pl-0 md:justify-self-end dark:text-white text-[#3C2A21] "
      >
        {theme === "light" ? (
          <DarkModeIcon fontSize="large" />
        ) : (
          <LightModeIcon fontSize="large" />
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#A59D84] dark:bg-slate-900 text-[#3C2A21] py-6 shadow-xl rounded-b-xl transition-all duration-500 ease-in-out">
          <ul className="flex flex-col items-center gap-6">
            {["about", "resume", "projects", "contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item}`}
                  onClick={closeMenu}
                  className="text-xl capitalize hover:opacity-70 transition"
                >
                  {item}
                </Link>
                <hr />
              </li>
              
            ))}
          </ul>
          <div className="flex justify-center gap-4 mt-4">
            {social.map((item, index) => {
              const IconComponent = item.tag;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="transition hover:opacity-70"
                >
                  <IconComponent fontSize="large" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
