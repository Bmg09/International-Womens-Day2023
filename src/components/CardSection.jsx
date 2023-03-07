import React, { useState, useEffect } from "react";

const CardSection = ({ data, reverse }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [paragraphUrl, setParagraphUrl] = useState("");

  const images = [...data.imageData];

  const paragraph = [...data.paragraphData];

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * images.length);

    const randomParaIndex = Math.floor(Math.random() * paragraph.length);

    setImageUrl(images[randomImageIndex]);

    setParagraphUrl(paragraph[randomParaIndex]);
  }, []);

  return (
    <div
      className={`"w-[100%] sm:h-[400px] h-[280px] flex justify-start items-center sm:gap-10 sm:px-10 gap-4 px-4" ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col sm:gap-4 gap-2">
        <h1 className="about__title sm:text-[2.7rem] text-[2rem]">
          {data.title}
        </h1>
        <p className="text-[0.75rem]">{paragraphUrl}</p>
      </div>
      <img
        src={imageUrl}
        alt="radmon"
        className="sm:w-[320px] sm:h-[330px] w-[220px] h-[220px] object-cover rounded-full"
      />
    </div>
  );
};

export default CardSection;
