import grad1 from "./../assets/images/grad1.png";
import group4 from "./../assets/images/group 4.png";
import React from 'react';

function TherapySection() {
  return (
    <>
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${grad1})` }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full px-[5vw]">

          {/* Content Section */}
          <div className="content-container w-full sm:w-[65%] h-full py-[10vh] flex flex-col items-start justify-center gap-6">
            <div className="bg-white py-16 px-12 sm:px-16">
              <h1 className="text-[#ff674f] text-2xl sm:text-3xl text-left font-semibold">
                What Is eCare Therapy?
              </h1>
              <p className="text-[#1D7E7C] text-3xl sm:text-4xl font-bold text-left">
                Therapy on <span className="text-[#193d3c]">your terms</span>
              </p>

              <p className="text-left max-w-[85%] sm:max-w-[70%] mt-4">
                At eCare Therapy, we’re redefining therapy by making online sessions with
                licensed professionals simple, accessible, and welcoming for everyone.
              </p>
              <br />

              <p className="text-left max-w-[85%] sm:max-w-[70%] mt-4">
                Browse, filter, choose, and connect—no subscriptions, no commitment, just
                personalized mental health support at your fingertips.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-container w-full sm:w-[35%] flex justify-center sm:justify-start items-center sm:mt-0 mt-6">
            <img
              className="w-[80%] sm:w-[90%] sm:h-auto h-[60%] object-contain"
              src={group4}
              alt="Group"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        /* Custom Styles */
        .content-container {
          transition: all 0.3s ease-in-out;
        }
        .image-container {
          transition: all 0.3s ease-in-out;
        }

        /* Add responsiveness for small screens */
        @media (max-width: 640px) {
          .content-container {
            padding-top: 5vh;
            padding-bottom: 5vh;
          }

          .image-container {
            margin-top: 3vh;
          }
        }

        /* Adjust content and image sections on larger screens */
        @media (min-width: 640px) {
          .content-container {
            padding-top: 10vh;
            padding-bottom: 10vh;
          }

          .image-container {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}

export default TherapySection;
