import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-[#8ceeec] py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-4">eCare Therapy</h2>
            <p className="text-sm leading-relaxed">
              eCare Therapy provides a safe and non-judgmental space to explore our thoughts, feelings, and experiences.
            </p>
            {/* Full-width social media icons */}
            <div className="flex justify-between space-x-4 mt-4 w-full">
              <Link to="#" aria-label="Facebook" className="hover:text-teal-400">
                <FaFacebook className='text-xl' />
              </Link>
              <Link to="#" aria-label="Instagram" className="hover:text-teal-400">
                <FaInstagram className='text-xl' />
              </Link>
              <Link to="#" aria-label="Twitter" className="hover:text-teal-400">
                <FaTwitter className='text-xl' />
              </Link>
              <Link to="#" aria-label="TikTok" className="hover:text-teal-400">
                <FaTiktok className='text-xl' />
              </Link>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-teal-400">Home</Link></li>
              <li><Link to="#" className="hover:text-teal-400">About us</Link></li>
              <li><Link to="#" className="hover:text-teal-400">Find therapist</Link></li>
              <li><Link to="#" className="hover:text-teal-400">For therapists</Link></li>
              <li><Link to="#" className="hover:text-teal-400">Contact us</Link></li>
              <li><Link to="#" className="hover:text-teal-400">Q&A</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-teal-400">Help & support</Link></li>
              <li><Link to="#" className="hover:text-teal-400">Privacy policy</Link></li>
              <li><Link to="#" className="hover:text-teal-400">Terms of service</Link></li>
              <li><Link to="#" className="hover:text-teal-400">HIPAA Compliance agreement</Link></li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Download the app</h3>
            <div>
              <p className="mb-2 text-sm">For patients</p>
              <div className="flex space-x-2">
                <Link to="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm">For therapists</p>
              <div className="flex space-x-2">
                <Link to="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-teal-800 pt-6 text-left">
          <p className="text-sm">&copy; eCare Therapy 2024 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
