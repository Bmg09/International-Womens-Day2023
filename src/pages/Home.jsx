import React from "react";
import Navbar from "../components/Navbar";
import womens from "../assets/womens_day1.png";
import background from "../assets/background.jpg";
import MaryKom from "../assets/marykom.png";
import ChavviMehta from "../assets/chavvi_mehta.png";
import KiranBedi from "../assets/KiranBedi.png";
import SunitaNarian from "../assets/sunita_narain.png";
import womens_day from "../assets/womens1.png";
import womens_day1 from "../assets/womens.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative w-[100vw] h-[620px] bg-[#f0e4ce] text-white sm:h-[520px]">
        <Navbar />
        <div className="sm:flex sm:gap-4 items-center hero__container justify-center">
          <img
            src={womens}
            alt="womens_day"
            className="w-[300px] h-[380px] m-auto rounded-full sm:h-[468px] sm:w-[320px] sm:m-0"
          />
          <div className="text-center w-[280px] sm:mx-2 mx-auto mt-2 sm:w-[380px] sm:mt-4">
            <span className="sm:text-[1.2rem]">
              Wishing all the amazing women out there a very happy and
              empowering
            </span>
            <h1 className="hero__container__headline sm:text-[3.3rem]">
              International Women's Day!
            </h1>
          </div>
        </div>
      </div>

      {/* quotes */}
      <div className="relative bg-black w-[100%] sm:h-[550px] h-[560px] text-center text-white sm:p-[8rem] py-[7rem] px-[3rem] flex justify-center">
        <div className="wave -mt-0.5">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <p className="sm:mt-1 sm:w-[500px] h-[fit-content] w-[350px] text-[1.1rem] sm:text-[1.25rem] text-[#f0e4ce] home__paragraph">
          Women are an integral part of our society, and their contributions are
          immeasurable. They play a critical role in shaping our families,
          communities, and the world at large. Women bring unique perspectives,
          experiences, and strengths that are essential for achieving a fair and
          just society. Women have made significant strides in various fields,
          including science, politics, business, and the arts, despite facing
          systemic barriers and discrimination. Celebrating and uplifting women
          is not only a moral imperative but also a key to building a better,
          more equitable future for all.
        </p>
      </div>

      {/* short stories */}
      <div className="relative bg-[#f0e4ce] w-[100%] h-[fit-content] text-center text-black sm:p-[8rem] px-[3rem] py-[6rem] flex justify-center flex-col items-center">
        <div className="waves_black -mt-0.5">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill1"
            ></path>
          </svg>
        </div>

        <h3 className="home__short-stories__headline -mb-1 sm:text-[1.9rem] uppercase text-[1.1rem]">
          <span>W</span>omen's <span>E</span>mpowerment
        </h3>

        <div className="border__line_style sm:w-[250px] w-[350px] bg-[#000]" />

        <div className="w-100 h-100 sm:mt-5 mb-12">
          <div className="flex sm:w-[750px] w-[490px] items-center sm:h-[310px] h-[290px] px-6 justify-center sm:gap-12 gap-3">
            <div className="person sm:max-w-[15rem] max-w-[12rem]">
              <div className="person__container">
                <img className="person__object" src={background} alt="" />
                <img className="person__img" src={MaryKom} alt="person_image" />
              </div>
            </div>

            <div className="mt-10 sm:w-[350px] h-[fit-content]flex flex-col w-[300px] sm:gap-[0.85rem] gap-[0.9rem]">
              <h1 className="home__description__headline sm:text-[2.5rem] text-[1.8rem]">
                Mary Kom
              </h1>
              <p className="home__description__paragraph sm:text-[1.1rem] text-[0.95rem] mt-2">
                A renowned boxer and Olympic medalist, Mary Kom has been a role
                model for young girls in India and has been actively involved in
                promoting sports among women.
              </p>
            </div>
          </div>

          <div className="flex sm:w-[750px] w-[490px] items-center sm:h-[310px] h-[290px] px-6 justify-center sm:gap-12 gap-3">
            <div className="mt-10 sm:w-[350px] h-[fit-content]flex flex-col w-[300px] sm:gap-[0.85rem] gap-[0.9rem]">
              <h1 className="home__description__headline sm:text-[2.5rem] text-[1.8rem]">
                Kiran Bedi
              </h1>
              <p className="home__description__paragraph sm:text-[1.1rem] text-[0.95rem] mt-2">
                India's first female IPS officer, she has been an advocate for
                women's rights and empowerment throughout her career.
              </p>
            </div>

            <div className="person sm:max-w-[15rem] max-w-[12rem]">
              <div className="person__container">
                <img className="person__object" src={background} alt="" />
                <img
                  className="person__img1"
                  src={KiranBedi}
                  alt="person_image"
                />
              </div>
            </div>
          </div>

          <div className="flex sm:w-[750px] w-[490px] items-center sm:h-[310px] h-[290px] px-6 justify-center sm:gap-12 gap-3">
            <div className="person sm:max-w-[15rem] max-w-[12rem]">
              <div className="person__container">
                <img className="person__object" src={background} alt="" />
                <img
                  className="person__img2"
                  src={ChavviMehta}
                  alt="person_image"
                />
              </div>
            </div>

            <div className="mt-10 sm:w-[350px] h-[fit-content]flex flex-col w-[300px] sm:gap-[0.85rem] gap-[0.9rem]">
              <h1 className="home__description__headline sm:text-[2.5rem] text-[1.8rem]">
                Chhavi Rajawat
              </h1>
              <p className="home__description__paragraph sm:text-[1.1rem] text-[0.95rem] mt-2">
                The youngest sarpanch (village head) in India, Chhavi Rajawat
                has been working to promote women's education and empowerment in
                rural India.
              </p>
            </div>
          </div>

          <div className="flex sm:w-[750px] w-[490px] items-center sm:h-[310px] h-[290px] px-6 justify-center sm:gap-12 gap-3">
            <div className="mt-10 sm:w-[350px] h-[fit-content]flex flex-col w-[300px] sm:gap-[0.85rem] gap-[0.9rem]">
              <h1 className="home__description__headline sm:text-[2.5rem] text-[1.8rem]">
                Sunita Narain
              </h1>
              <p className="home__description__paragraph sm:text-[1.1rem] text-[0.95rem] mt-2">
                An environmentalist and director general of the Centre for
                Science and Environment, Sunita Narain has been a strong
                advocate for women's empowerment and has spoken out on issues
                related to gender equality.
              </p>
            </div>

            <div className="person sm:max-w-[15rem] max-w-[12rem]">
              <div className="person__container">
                <img className="person__object" src={background} alt="" />
                <img
                  className="person__img3"
                  src={SunitaNarian}
                  alt="person_image"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="sm:text-[1.25rem] text-[1.1rem] text-[var(--grey)]">
          These are just a few examples of the many Indian women who have
          contributed to women's empowerment. There are countless others who
          have worked tirelessly to improve the lives of women in India and
          around the world.
        </p>
      </div>

      {/* short essay */}
      <div className="relative bg-black w-[100%] h-[fit-content] text-center text-white sm:p-[5rem] px-[5rem] py-[3rem] flex justify-center flex-col items-center gap-8">
        <div className="wave -mt-0.5">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <img src={womens_day} className="w-[300px] h-[300px] mt-2" />
        <p className="sm:w-[550px] w-[470px] sm:text-[1.2rem] text-[1.1rem]">
          Women are the embodiment of strength, resilience, and grace. They have
          overcome countless challenges throughout history and continue to do so
          today. Despite facing discrimination, inequality, and oppression,
          women rise up to the occasion and make their voices heard. They are
          daughters, sisters, mothers, and friends, who nurture and support
          those around them. Women bring love, compassion, and empathy to the
          world, and their contributions are immeasurable. Their unbreakable
          spirit and unwavering determination inspire us all to strive for a
          better tomorrow. We must continue to uplift and empower women, for
          they are the backbone of society and the true warriors of our time.
        </p>
      </div>

      {/* Short para */}
      <div className="bg-black sm:w-100 sm:h-[500px] h-[430px] text-center text-white flex justify-center items-center -mt-0.5">
        <div className="sm:w-[720px] sm:h-[400px] h-[350px] w-[480px] flex sm:gap-4 gap-3 justify-center items-center">
          <p className="sm:p-[2.5rem] sm:text-[1.45rem] text-[1rem] flex items-center text-[var(--white)]">
            To all the women who have paved the way for future generations, and
            to all those who continue to fight for equality and justice, I wish
            you a very Happy International Women's Day!
          </p>
          <img
            src={womens_day1}
            alt="womens_day"
            className="w-[290px] h-[290px] sm:w-full sm:h-full"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
