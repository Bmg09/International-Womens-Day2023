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
    <div className="bg-black text-white w-full h-full sm:p-8 p-4">
      <a
        href="/"
        className="text-white hover:text-grey hover:border-b-2 border-grey"
      >
        Back
      </a>

      <div className="relative w-full max-w-screen-lg h-full min-h-screen m-auto mt-8 text-center flex flex-col gap-3 items-center">
        <p className="sm:text-2xl text-3xl uppercase font-bold mb-4">
          The precious gems of Life
        </p>

        <CardSection data={MotherData} />

        <div className="border__line_style sm:w-1/4 w-1/2 bg-white" />

        <CardSection data={SisterData} reverse={reverse} />

        <div className="border__line_style sm:w-1/4 w-1/2 bg-white" />

        <CardSection data={FriendData} />

        <div className="border__line_style sm:w-1/4 w-1/2 bg-white" />

        <CardSection data={WifeData} reverse={reverse} />

        <div className="border__line_style sm:w-1/4 w-1/2 bg-white" />

        <CardSection data={DaughterData} />

        <div className="border__line_style sm:w-1/4 w-1/2 bg-white" />

        <p className="sm:w-3/4 sm:text-xl text-lg text-white sm:my-10 my-4">
          Dear men, let us work together to empower the women in our lives. Let
          us listen to their voices, support their dreams, and celebrate their
          achievements. Let us stand up against gender inequality,
          discrimination, and violence. Letus be allies and advocates for
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

