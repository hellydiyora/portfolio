import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import instagram from "../assets/Images/Logo/instagram.png";
import linkedin from "../assets/Images/Logo/linkedin.png";

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null);
  const [errorMessages, setErrorMessages] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setErrorMessages("Please enter all fields");
      return;
    }

    emailjs
      .sendForm("service_c65t0h5", "template_xblm6ha", form.current, {
        publicKey: "a0KIvX2CQE5GPAUE4",
      })
      .then(
        (result) => {
          setAlertMessage(
            "Message Sent Successfully, I will get back to you shortly"
          );
          form.current.reset();
        },
        (error) => {
          setAlertMessage("An error occurred, Please try again");
        }
      );
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleInputChange = () => {
    if (errorMessages) {
      setErrorMessages(null);
    }
  };

  return (
    <div className="bg-[#E1D7B7] dark:bg-slate-900 pt-20 relative grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center font-askilon">
      {alertMessage && (
        <div className="absolute top-16 left-10  z-70 bg-white border-1 text-black  p-3 rounded-lg shadow-md text-lg uppercase">
          {alertMessage}
        </div>
      )}
      <div className="pt-10 lg:pt-0 px-10 ">
        <h1 className="text-6xl  text-[#4B5945] dark:text-[#D7D3BF] font-bold text-left">
          Contact
        </h1>
        <p className="text-2xl font-semibold text-[#183D3D] dark:text-neutral-500 py-5">
          <span className="font-light font-serif">
            Get in touch with me via social media or send me an email.
          </span>
          <div className="grid text-xl justify-items-start sm:text-2xl grid-cols-2 pt-4">
            {" "}
            <a
              className="cursor-pointer flex gap-2 justify-start items-center hover:opacity-75"
              href="https://www.instagram.com/_hellyy_16/"
              target="_blank"
              aria-label="instagram"
            >
              <span className="text-[#c13584]">Instagram</span>
              <img src={instagram} alt="mode" className="h-10 w-10 " />
            </a>
            <a
              className="cursor-pointer flex gap-2 justify-start items-center hover:opacity-75"
              href="https://www.linkedin.com/in/helly-diyora-160203h/"
              target="_blank"
              aria-label="linkedin"
            >
              {" "}
              <span className="text-[#0A66C2]">Linkedin</span>
              <img src={linkedin} alt="mode" className="h-10 w-10 " />
            </a>
          </div>
        </p>
      </div>
      <div className=" font-poppins text-lg">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-[#2d3e5e] p-6 m-6 shadow-neutral-500 dark:shadow-neutral-700 shadow-md rounded-lg space-y-4  place-items-center"
        >
          <h1 className="text-4xl lg:text-5xl  text-[#4B5945] dark:text-white font-bold text-center p-2 lg:p-4">
            Send me an email
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
            <div className="grid grid-rows-2 gap-2 ">
              <div>
                <label className="block text-[#4B5945] dark:text-gray-100">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full dark:text-white border border-gray-300 dark:border-gray-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder-neutral-400 "
                  onChange={handleInputChange}
                  placeholder="Willaim"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-100">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 dark:border-gray-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder-neutral-400 dark:text-white"
                  onChange={handleInputChange}
                  placeholder="williamc@gmail.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-100">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full h-[140px] border border-gray-300 dark:border-gray-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder-neutral-400 dark:text-white"
                onChange={handleInputChange}
                placeholder="Hello Helly, I would like to discuss..."
              />
            </div>
          </div>

          <input
            type="submit"
            value="Send email"
            className=" bg-[#233a30]  dark:bg-[#f7faed] text-orange-200 dark:text-black p-2 px-4 rounded-md cursor-pointer hover:bg-[#183D3D] hover:shadow-lg shadow-[#484846] shadow-md dark:shadow-slate-400 dark:hover:shadow-lg dark:hover:bg-[#eaede0] transition "
          />
          {errorMessages && (
            <div className=" text-red-700 bg-red-100 px-3 py-2 rounded-md text-[15px] font-light uppercase">
              {errorMessages}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
