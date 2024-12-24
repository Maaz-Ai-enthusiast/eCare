import React from "react";
import frame from './../assets/images/Frame 8.png';
import Button from './Button'; // Importing the Button component

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1d7e7c] px-4 py-10 lg:px-40">
      <div className="text-center lg:text-left lg:w-1/2 mx-auto lg:mx-0">
        <p className="text-[#ffa597]">CONTACT</p>
        <p className="text-white text-3xl font-bold leading-tight">Questions?</p>
        <p className="text-3xl text-[#8ceeec] font-bold leading-tight">Reach out. We're</p>
        <p className="text-3xl text-[#8ceeec] font-bold leading-tight">happy to help.</p>
        <img src={frame} alt="Frame" className="w-48 h-48  mx-auto lg:mx-0 mt-8 lg:mt-0" />
      </div>
      
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <form className="w-full max-w-lg mx-auto lg:mx-0">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="firstname" className="mb-1 text-lg text-white">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="bg-transparent text-white border-b-2 border-dotted p-2 focus:outline-none focus:ring-0 w-full placeholder-[#8ceeec]"
                style={{ borderBottomColor: '#193d3c' }} // Custom border color
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="mb-1 text-lg text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="bg-transparent text-white border-b-2 border-dotted p-2 focus:outline-none focus:ring-0 w-full placeholder-[#8ceeec]"
                style={{ borderBottomColor: '#193d3c' }} // Custom border color
                placeholder="Enter last name"
              />
            </div>
          </div>
          
          <div className="flex flex-col my-5">
            <label htmlFor="email" className="mb-1 text-lg text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent text-white border-b-2 border-dotted p-2 focus:outline-none focus:ring-0 w-full placeholder-[#8ceeec]"
              style={{ borderBottomColor: '#193d3c' }} // Custom border color
              placeholder="Enter email address"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="query" className="mb-1 text-lg text-white">
              Your Query
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent text-white border-b-2 border-dotted p-2 focus:outline-none focus:ring-0 w-full placeholder-[#8ceeec]"
              style={{ borderBottomColor: '#193d3c' }} // Custom border color
              placeholder="Enter your query"
            />
          </div>
          
          <div className="flex justify-center lg:justify-start my-8">
            {/* Replace button with custom Button component */}
            <Button className="text-white border border-white rounded-full px-6 py-3" title="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
