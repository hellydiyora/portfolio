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
    <div className="bg-[#E1D7B7] dark:bg-slate-900 pt-20">
      <div className="flex justify-between font-askilon">
        <div className="w-3/4 p-16">
          <h1 className="text-6xl text-[#4B5945] dark:text-[#D7D3BF] font-extrabold ">
            About
          </h1>
          <p className="text-3xl font-semibold text-[#133122] dark:text-white py-5">
            {intro}
          </p>
          <p className="text-2xl text-[#05170e]  dark:text-[#D9DFC6] font-askilon font-light">
            {description}
          </p>
          <div>
            <div className="p-10">
              <ul className="flex gap-2">
                <div className="flex flex-col justify-between gap-7 ">
                  <li className="text-2xl font-medium text-[#133122] dark:text-gray-200">
                    Degree:{" "}
                    <span className="text-xl text-black dark:text-[#D9DFC6] font-light">
                      {degree}
                    </span>
                  </li>
                  <li className="text-2xl font-medium text-[#133122] dark:text-gray-200">
                    Degree Status:{" "}
                    <span className="text-xl text-black font-light dark:text-[#D9DFC6]">
                      {degreeStatus}
                    </span>
                  </li>
                </div>
                <div className="flex flex-col justify-between items-end gap-7">
                  <li className="text-2xl font-medium text-[#133122] dark:text-gray-200">
                    Employment status:{" "}
                    <span className="text-xl text-black font-light dark:text-[#D9DFC6]">
                      {employment}
                    </span>
                  </li>
                  <li className="text-2xl font-medium text-[#133122] dark:text-gray-200">
                    University:{" "}
                    <span className="text-xl text-black font-light dark:text-[#D9DFC6]">
                      {university}
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/4 pt-16 pr-4">
          <img
            src={profile}
            className="h-[400px] w-[350px] mx-auto shadow-lg shadow-neutral-800 dark:shadow-neutral-600 rounded-lg"
            alt="profile"
          />
        </div>
      </div>

      <div className="pt-2 px-20 pb-16 font-askilon" ref={skillsRef}>
        <h1 className="text-6xl text-[#4B5945] dark:text-[#D7D3BF] font-bold text-center mb-10">
          Skills
        </h1>
        <div className="grid grid-cols-2 gap-10 font-semibold">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center"
            >
              <div className="flex justify-between w-full ">
                <h1 className="text-xl  text-neutral-800 dark:text-gray-50">
                  {skill.name}
                </h1>
                <p className="ml-4 dark:text-gray-50">
                  {animatedPercentages[index]}%
                </p>
              </div>

              <div className="w-full border-1 border-[#183D3D] dark:border-gray-200 bg-neutral-200 dark:bg-neutral-700 rounded-full">
                <div
                  className="h-2 bg-[#183D3D] dark:bg-gray-200 dark:text-[#1E201E] rounded-full"
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
