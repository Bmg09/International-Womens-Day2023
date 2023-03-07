import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] sm:h-[220px] h-[170px] text-center text-white flex justify-center items-center flex-col sm:gap-4 gap-3 -mt-0.5">
      <div className="border__line_style sm:w-[250px] w-[350px] bg-[#fff]" />

      <h1 className="hero__container__headline-white sm:text-[3.3rem] text-[2rem] mt-[1rem]">
        Happy International Women's Day
      </h1>
      <div className="flex sm:w-[760px] w-[450px] sm:h-[60px] justify-between items-center">
        <p className="sm:text-[0.9rem] text-[0.75rem] text-[var(--grey)]">
          @2023 Copyright issued by Abiekatkam
        </p>

        <a
          href="https://github.com/AbieKatkam"
          className="sm:text-[0.9rem] text-[0.75rem] text-[var(--white)] flex items-center gap-2 hover:text-[var(--grey)]"
          target="_blank"
        >
          Follow me on Github{" "}
          <i className="fa-brands fa-github sm:text-[1.5rem] text-[1.2rem]"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
