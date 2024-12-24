import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import grad1 from "../assets/images/grad1.png";

const LoginForm = () => {
  return (
    <div className="relative top-[4vh] min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${grad1})` }}>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        {/* Logo and Header */}
        <div className="text-center">
          <h1 className="mx-auto text-xl font-bold h-12 text-teal-600">care therapy</h1>
          <h1 className="text-2xl font-semibold mt-4">Welcome back</h1>
          <p className="text-gray-600 mt-2">Enter your phone number to proceed</p>
        </div>

        {/* Form */}
        <form className="mt-6">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <select
              className="bg-gray-50 text-gray-700 p-2 outline-none border-r border-gray-300"
              defaultValue="US"
            >
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="tel"
              className="w-full p-2 outline-none"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Continue with Google */}
        <button className="w-full bg-gray-100 text-gray-800 font-medium py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
          <FaGoogle className="h-5 w-5 text-red-600" />
          Continue with Google
        </button>

        {/* Continue with Apple */}
        <button className="w-full bg-gray-100 text-gray-800 font-medium py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition mt-2">
          <FaApple className="h-5 w-5 text-black" />
          Continue with Apple
        </button>

        {/* Footer */}
        <div className="text-center mt-4 text-sm text-gray-500">
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>{" "}
          &middot;{" "}
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
