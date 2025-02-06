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
    <div className="pt-20 grid grid-cols-1 md:grid-cols-2 h-lvh bg-[#ECEBDE] dark:bg-slate-900  justify-self-center self-center">
      {/* <div
        className="bg-cover bg-center h-lvh"
        style={{
          backgroundImage: `url(${theme === "dark" ? bgDarkImage : bgImage})`,
        }}
      > */}
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col gap-2 ">
          <h1 className=" text-[#1A120B] dark:text-white font-askilon text-3xl md:text-4xl lg:text-5xl text-center  font-semibold">
            Hey, I am <span className="font-bold text-5xl md:text-6xl lg:text-7xl ">{name}</span>.
          </h1>
          <p className="px-10 md:px-32 text-xl md:text-xl text-[#6C4E31] dark:text-[#D6CFB4]  text-center font-serif ">
            {description}
          </p>
          <Link to="/about" >
            <button className=" bg-[#A59D84] text-lg font-semibold dark:bg-[#c2c5b9] text-[#1A120B] dark:text-black p-2 px-4 rounded-md cursor-pointer hover:bg-[#C1BAA1] hover:shadow-lg shadow-[#484846] shadow-md dark:shadow-neutral-700 dark:hover:shadow-lg dark:hover:bg-[#d9dccf] transition ">
              About me
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden xs:flex justify-center items-center  ">
      <img src={heroImg} alt="img" className=" bg-transparent lg:h-[400px] lg:w-[600px] cust:h-[350px] cust:w-[550px] md:h-[400px] w-650px]" />
      </div>
    </div>
  );
};

export default Home;
