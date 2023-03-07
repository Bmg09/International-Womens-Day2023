import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-transparent w-[100vw] h-[3.25rem] justify-end px-[2rem] items-center sm:relative z-10">
      <div className="flex items-center gap-4">
        <a
          href="/womens"
          className="text-black text-[0.95rem] hover:text-[var(--brown)] border-b-2 border-transparent hover:border-[var(--brown)] transition-all duration-300 ease-in-out sm:text-[1.1rem]"
        >
          Gems Of Life
        </a>
      </div>
    </div>
  );
};

export default Navbar;
