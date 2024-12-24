import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/Vector.png';
import Button from './Button'; // Import the Button component

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="absolute top-[10px] left-1/2 transform -translate-x-1/2 flex justify-between items-center h-[86px] w-[95vw] mx-auto px-5 md:px-10 rounded-[8px] bg-white z-10"
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="logo" className="h-6 md:h-8 lg:h-10 w-auto" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-5 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6 text-[#1D7E7C] text-xs md:text-sm lg:text-base whitespace-nowrap">
            <Link to="/about">About us</Link>
            <Link to="/find-therapist">Find Therapist</Link>
            <Link to="/for-therapist">For Therapist</Link>
            <Link to="/contact">Contact us</Link>
          </div>

          <div className="flex items-center gap-3 lg:gap-5">
            <Link to="/patient-login">
              <Button
                className="bg-[#1D7E7C] text-white px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 text-xs md:text-sm lg:text-base rounded-full whitespace-nowrap"
                title="Patient Login"
              />
            </Link>
            <Link to="/therapist-login">
              <Button
                className="text-[#1D7E7C] px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 text-xs md:text-sm lg:text-base rounded-full border border-[#1D7E7C] whitespace-nowrap"
                title="Therapist Login"
              />
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button onClick={toggleMenu} className="text-[#1D7E7C] text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[91vw] bg-[#ffffff] p-5 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <Link to="/">
            <img src={logo} alt="logo" className="h-6 md:h-8 w-auto" />
          </Link>
          <button onClick={toggleMenu} className="text-[#1D7E7C] text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 text-[#1D7E7C]">
          <Link to="/about" onClick={toggleMenu}>
            About us
          </Link>
          <Link to="/find-therapist" onClick={toggleMenu}>
            Find Therapist
          </Link>
          <Link to="/for-therapist" onClick={toggleMenu}>
            For Therapist
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact us
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <Link to="/patient-login"
            onClick={toggleMenu}
          >
            <Button
              className="bg-[#1D7E7C] text-white px-4 py-2 rounded-full w-full"
              title="Patient Login"
            />
          </Link>
          <Link to="/therapist-login"
            onClick={toggleMenu}
          >
            <Button
              className="text-[#1D7E7C] px-4 py-2 rounded-full border border-[#1D7E7C] w-full"
              title="Therapist Login"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
