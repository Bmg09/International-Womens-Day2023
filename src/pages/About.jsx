import React from "react";
import CardSection from "../components/CardSection";
import {
  MotherData,
  SisterData,
  FriendData,
  DaughterData,
  WifeData,
} from "../Data";
import Footer from "../components/Footer";

const About = () => {
  const reverse = true;

  return (
    <div className="bg-[#000] text-white w-[100%] h-[fit-content] sm:p-[2rem] p-[1rem]">
      <a
        href="/"
        className="text-[#fff] hover:text-[var(--grey)] hover:border-b-2 border-[var(--grey)]"
      >
        Back
      </a>

      <div className="relative sm:w-[850px] h-[fit-content] min-h-[600px] m-auto mt-[2rem] text-center flex flex-col gap-3 items-center">
        <p className="sm:text-[1.2rem] text-[1.4rem] uppercase text-[var(--white)] text-bold mb-4">
          The precious gems of Life
        </p>

        <CardSection data={MotherData} />

        <div className="border__line_style sm:w-[250px] w-[350px] bg-[#fff]" />

        <CardSection data={SisterData} reverse={reverse} />

        <div className="border__line_style sm:w-[250px] w-[350px] bg-[#fff]" />

        <CardSection data={FriendData} />

        <div className="border__line_style bg-[#fff] sm:w-[250px] w-[350px]" />

        <CardSection data={WifeData} reverse={reverse} />

        <div className="border__line_style bg-[#fff] sm:w-[250px] w-[350px]" />

        <CardSection data={DaughterData} />

        <div className="border__line_style bg-[#fff] sm:w-[250px] w-[350px]" />

        <p className="sm:w-[500px] sm:text-[1.3rem] text-[#f0e4ce] sm:my-10 w-[410px] my-4">
          Dear men, let us work together to empower the women in our lives. Let
          us listen to their voices, support their dreams, and celebrate their
          achievements. Let us stand up against gender inequality,
          discrimination, and violence. Let us be allies and advocates for
          women's rights and equality. Let us create a world where women can
          thrive, lead, and make a positive impact. Remember, gender equality is
          not just a women's issue, it's a human issue. Let us all do our part
          to empower women and build a better world for all.
        </p>

        <Footer />
      </div>
    </div>
  );
};

export default About;
