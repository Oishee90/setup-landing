import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footer from "../../assets/notes.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-[#2D2D2D]">
        {/* Logo and Store Links */}
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF6A00] w-8 h-8 rounded-md flex items-center justify-center font-bold text-black">
              <img src={footer} alt="" />
            </div>
            <span className="text-xl font-semibold">SmartNotes</span>
          </div>

          <div className="flex gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-32"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-32"
            />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-2 text-[#B3B3B3] text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-[#B3B3B3] text-sm">
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-[#B3B3B3] text-sm">
            <li>Blog</li>
            <li>Webinars</li>
            <li>Case Studies</li>
            <li>Templates</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-[#B3B3B3] text-sm">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Acceptable Use</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FF6A00] text-black py-5 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          @2024 SmartNotes!. All Rights Reserved.{" "}
          <a
            href="https://x.com/iamhervewesbo"
            className="text-black font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iamhervewesbo
          </a>
        </p>
        <div className="flex gap-4 text-white">
          <a href="#">
            <FaFacebookF className="text-black hover:text-white" />
          </a>
          <a href="#">
            <FaLinkedinIn className="text-black hover:text-white" />
          </a>
          <a href="#">
            <FaTwitter className="text-black hover:text-white" />
          </a>
          <a href="#">
            <FaYoutube className="text-black hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
