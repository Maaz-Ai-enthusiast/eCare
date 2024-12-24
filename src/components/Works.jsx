import React from "react";
import patent from "./../assets/images/patient illustrated.png";
import bgDark from "./../assets/images/bg-dark.png";
import dollar from "./../assets/images/dollar.png";
import done from "./../assets/images/done.png";
import person from "./../assets/images/person.png";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Works() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-teal-950 p-5 w-full"
      style={{
        backgroundImage: `url(${bgDark})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-center text-2xl md:text-4xl text-white mb-2">
          How it works
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-20 rounded h-auto w-auto bg-[#1D7E7C] py-[10px] px-[12px] mb-2">
          <p className="bg-white px-4 py-2 rounded text-[#1D7E7C] font-semibold">
            Wanna talk?
          </p>
          <p className="text-white font-semibold">Wanna listen?</p>
        </div>
      </div>
      <div className="w-full md:w-[705px] text-center my-5">
        <p className="text-[#8CEEEC]">Welcome to your safe space</p>
        <p className="text-white">
          Welcome to your safe space Your mental well-being is our top priority.
          Find balance and growth through meaningful connections, one session at
          a time.
        </p>
      </div>
      <div className="mb-2">
        <img
          src={patent}
          className="w-full max-w-[740px] h-auto"
          alt="Patient Illustration"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 my-5 md:gap-[30px]">
        <div className="w-full md:w-[352px] h-auto text-center md:text-left">
          <img
            src={person}
            className="mx-auto md:mx-0"
            alt="Choose your therapist"
          />
          <p className="text-[#8CEEEC] mt-2">Choose your therapist</p>
          <p className="text-white text-sm md:text-base">
            Browse therapist profiles, including bios, genders, languages
            spoken, pricing, and ratings, to find someone you can truly connect
            with. Unlike other platforms that assign a therapist, you have the
            freedom to choose.
          </p>
        </div>
        <div className="w-full md:w-[352px] h-auto text-center md:text-left">
          <img
            src={done}
            className="mx-auto md:mx-0"
            alt="Rebook or switch anytime"
          />
          <p className="text-[#8CEEEC] mt-2">Rebook or switch anytime</p>
          <p className="text-white text-sm md:text-base">
            If you find a therapist who resonates with you, rebooking is easy.
            Alternatively, you have the flexibility to choose a different
            therapist whenever you need.
          </p>
        </div>
        <div className="w-full md:w-[352px] h-auto text-center md:text-left">
          <img src={dollar} className="mx-auto md:mx-0" alt="No commitment" />
          <p className="text-[#8CEEEC] mt-2">No commitment</p>
          <p className="text-white text-sm md:text-base">
            Unlike other platforms, we don't require costly subscriptions,
            allowing you to access the support you need without financial
            burden.
          </p>
        </div>
      </div>

      <div className="flex gap-4 justify-center my-12">
        <button className="flex items-center bg-white px-5 py-2 rounded-3xl gap-2 text-[#1D7E7C] whitespace-nowrap">
          For IOS <FaApple />
        </button>
        <button className="flex items-center bg-white px-5 py-2 rounded-3xl gap-2 text-[#1D7E7C] whitespace-nowrap">
          For Android <FaGooglePlay />
        </button>
      </div>
    </div>
  );
}

export default Works;
