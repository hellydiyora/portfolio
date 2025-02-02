import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { social } from "../data";

const Navbar = () => {
  const { theme, onChange } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      style={{
        boxShadow:
          theme === "light"
            ? "0 4px 6px rgba(115, 115, 115, 0.15)"
            : "0 4px 6px rgba(229, 229, 229, 0.15)",
      }}
      className={`font-askilon fixed top-0 left-0 w-full z-50 drop-shadow-lg transition-all duration-300 flex justify-between items-center py-4 px-14 ${
        isScrolled
          ? "bg-transparent backdrop-blur-lg bg-opacity-70 text-[#F6E6CB]"
          : "bg-[#183D3D] dark:bg-slate-950"
      }`}
    >
      <Link to="/">
        <h1
          className={`text-5xl font-bold dark:text-white hover:opacity-70 transition ${
            isScrolled ? "text-black" : "text-[#F6E6CB]"
          }`}
        >
          HD
        </h1>
      </Link>

      <ul className="flex space-x-12 text-2xl justify-center font-light">
        {["about", "resume", "projects", "contact"].map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={`/${item}`}
              className={`dark:text-white capitalize ${
                isScrolled
                  ? "text-black hover:opacity-50"
                  : "text-[#F6E6CB] hover:opacity-50"
              }`}
            >
              {item}
              <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] w-0 bg-gray-500 dark:bg-gray-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      <ul
        className={`flex gap-4 justify-center space-x-6 ${
          isScrolled
            ? "text-black"
            : "text-[#F6E6CB] dark:text-white cursor-pointer"
        }`}
      >
        {social.map((item, index) => {
          const IconComponent = item.tag; // Retrieve component reference
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="dark:text-white  transition hover:opacity-50"
            >
              <IconComponent fontSize="large" />
            </a>
          );
        })}
        <div onClick={onChange} className="cursor-pointer dark:text-white">
          {theme === "light" ? <DarkModeIcon fontSize="large" /> : <LightModeIcon fontSize="large" />}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
