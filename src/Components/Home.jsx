import React from "react";
import { useTheme } from "../Context/ThemeProvider";
import bgImage from "../assets/Images/background2.jpg";
import bgDarkImage from "../assets/Images/background3-dark.jpg";
import heroImg from "../assets/Images/heroImage.png";
import { home } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const { name, description } = home;

  return (
    <div className="pt-20 flex justify-between items-center h-screen bg-[#E1D7B7] dark:bg-slate-900 ">
      {/* <div
        className="bg-cover bg-center h-lvh"
        style={{
          backgroundImage: `url(${theme === "dark" ? bgDarkImage : bgImage})`,
        }}
      > */}
      <div className=" bg-[#E1D7B7] dark:bg-slate-900  ">
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className=" text-[#0c2217] dark:text-white font-askilon text-6xl text-center  font-medium">
            Hey, I am <span className="font-bold  text-7xl">{name}</span>.
          </h1>
          <p className="px-32 text-2xl text-[#24331d] dark:text-[#D6CFB4]  text-center font-askilon">
            {description}
          </p>
          <Link to="/about">
            <button className=" bg-[#233a30] text-lg font-semibold dark:bg-[#f7faed] text-orange-200 dark:text-black p-2 px-4 rounded-md cursor-pointer hover:bg-[#183D3D] hover:shadow-lg shadow-[#484846] shadow-md dark:shadow-neutral-700 dark:hover:shadow-lg dark:hover:bg-[#eaede0] transition ">
              About me
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-[700px] ">
      <img src={heroImg} alt="img" className="pr-10 bg-transparent " />
      </div>
    </div>
  );
};

export default Home;
