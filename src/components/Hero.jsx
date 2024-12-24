import hero from "../assets/images/hero.png"; // Adjusted path
import Button from "./Button";

function Hero() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
{/* 
 
 hero content

*/}
     
     <div className="flex flex-col absolute top-[30vh] sm:top-[40vh] left-[10vw] gap-6">
  <h1 className="bg-gradient-to-r from-[#7feae4] to-[#ffffff] text-transparent bg-clip-text text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
    What’s on your mind?
  </h1>
 <div>
 <p className="font-helvetica  text-[16px] sm:text-[20px] leading-[25.4px] text-[#ffffff] max-w-[50vw] sm:max-w-[40vw] ">
    Whatever it is, we’re here to help you find the support that feels right. eCare Therapy is a safe space to connect with licensed therapists that fit your life—whenever and wherever you need it most.
  </p>
 </div>
  <div>
  <Button
    className="bg-[#ffffff] text-[#1D7E7C] sm:px-[86px] px-[60px] py-[14px] rounded-full  "
    title="Get started"
  />
  </div>
</div>


    </div>
  );
}

export default Hero;
