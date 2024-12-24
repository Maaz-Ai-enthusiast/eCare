import React from "react";
import photo from './../assets/images/photo.png';

function Steps() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-32 px-4 md:px-8 lg:px-0">
      {/* Steps Section */}
      <div className="my-10 space-y-4">
        <p className="text-red-600">Steps</p>
        <h1 className="text-teal-600 text-2xl md:text-3xl">Starting is simple</h1>
        <h4 className="text-red-600 bg-red-100 p-3">
          Download the app or visit the website
        </h4>
        <div className="space-y-2">
          <p>Browse and filter therapist</p>
          <p>Choose and book</p>
          <p>Secure Payment</p>
          <p>Get ready for your Session</p>
        </div>
      </div>

      {/* Info and Image Section */}
      <div className="my-10 md:my-32">
        <p className="text-red-600">Download the app or visit the Website</p>
        <p className="mt-2 mb-4">
          Create a profile in minutes - for free. It's quick and easy to get started.
        </p>
        <img src={photo} className="w-full max-w-[20rem] md:max-w-[32rem] h-auto" alt="" />
      </div>
    </div>
  );
}

export default Steps;