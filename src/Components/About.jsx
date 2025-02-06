import React, { useState, useEffect, useRef } from "react";
import { about } from "../data";
import profile from "../assets/Images/profile.jpg";
import { skills } from "../data";

const About = () => {
  const { intro, description, employment, degree, university, degreeStatus } =
    about;

  const [animatedPercentages, setAnimatedPercentages] = useState(
    skills.map(() => 0)
  );
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateSkills();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const animateSkills = () => {
    const interval = 20;
    const maxSteps = skills.map((skill) => parseInt(skill.percentage, 10));

    const animationInterval = setInterval(() => {
      setAnimatedPercentages((prev) =>
        prev.map((percent, index) => {
          if (percent < maxSteps[index]) {
            return Math.min(percent + 1, maxSteps[index]);
          }
          return percent;
        })
      );
    }, interval);

    setTimeout(
      () => clearInterval(animationInterval),
      Math.max(...maxSteps) * interval
    );
  };

  return (
    <div className="bg-[#ECEBDE] dark:bg-slate-900  pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[75%_25%]  font-askilon">
        <div className=" p-10 md:p-16 ">
          <h1 className="text-6xl text-[#775f46] dark:text-[#D7D3BF] font-extrabold ">
            About
          </h1>
          <p className="text-3xl font-semibold text-[#3C2A21] dark:text-white py-5">
            {intro}
          </p>
          <p className="text-xl text-[#54473F]  dark:text-neutral-500 font-serif font-light">
            {description}
          </p>
          <div>
            <div className="px-2 py-10 lg:p-10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 font-serif">
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-2 ">
                  <li>
                    <span className="text-xl font-medium  text-[#3C2A21] dark:text-gray-200">
                      Degree:{" "}
                    </span>
                    <span className="text-lg text-[#54473F] dark:text-neutral-400 font-light">
                      {degree}
                    </span>
                  </li>
                  <li className="text-xl font-medium text-[#3C2A21] dark:text-gray-200">
                    Degree Status:{" "}
                    <span className="text-lg text-[#54473F] font-light dark:text-neutral-400">
                      {degreeStatus}
                    </span>
                  </li>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-2">
                  <li className="text-xl font-medium text-[#3C2A21] dark:text-gray-200">
                    Employment status:{" "}
                    <span className="text-lg text-[#54473F] font-light dark:text-neutral-400">
                      {employment}
                    </span>
                  </li>
                  <li className="text-xl font-medium text-[#3C2A21] dark:text-gray-200">
                    University:{" "}
                    <span className="text-lg text-[#54473F] font-light dark:text-neutral-400">
                      {university}
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-0 mb-10 lg:mb-0 lg:pt-16">
          <img
            src={profile}
            className="h-[400px] w-[330px] lg:w-[350px] mx-auto shadow-md shadow-neutral-800 dark:shadow-neutral-600 rounded-lg"
            alt="profile"
          />
        </div>
      </div>

      <div className="pt-2 px-10 lg:px-20 pb-16 font-askilon" ref={skillsRef}>
        <h1 className="text-6xl text-[#775f46] dark:text-[#D7D3BF] font-bold text-center mb-10">
          Skills
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-semibold">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center"
            >
              <div className="flex justify-between w-full ">
                <h1 className="text-xl  text-[#54473F] dark:text-gray-50">
                  {skill.name}
                </h1>
                <p className="ml-4 text-[#54473F] dark:text-gray-50">
                  {animatedPercentages[index]}%
                </p>
              </div>

              <div className="w-full border-1 border-[#3C2A21] dark:border-gray-200 bg-neutral-200 dark:bg-neutral-700 rounded-full">
                <div
                  className="h-2 bg-[#3C2A21] dark:bg-gray-200 dark:text-[#1E201E] rounded-full"
                  style={{ width: `${animatedPercentages[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
