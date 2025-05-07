import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgArrowTopRightR } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Review", id: "review" },
    { name: "FAQ", id: "faq" },
  ];

  useEffect(() => {
    const handleScrollEvent = () => {
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (id === "home") {
      navigate("/");
    }
    if (id === "Resources") {
      navigate("/resources");
    }
    if (id === "Contact us") {
      navigate("/contactus");
    }
    if (id === "about") {
      navigate("/about");
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Invalid user in localStorage", err);
      }
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Existing section tracking
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto ">
      <nav
        className={`text-white fixed top-0 left-0 w-full z-50 bg-[#000000] transition-all duration-300 ${
          isScrolled ? "border-b-2 border-[#ff6a0098]" : "border-b-black"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center 2xl:py-2 px-6 pt-6 pb-6 ">
          {/*  Left: Logo */}
          <div className="text-xl md:text-xl lg:text-2xl font-extrabold dm-sans text-[#FFFFFF]">
            <a
              className=" text-[#FFFFFF] flex justify-center items-center gap-3"
              href="#"
            >
              <img
                src={logo}
                alt=""
                className="max-w-[80%] w-[38px] h-[42px]"
              />
              <span>Probet </span>
            </a>
          </div>

          {/* Center: Navigation Menu (Large Screen) */}
          <ul className="hidden lg:flex gflex items-center gap-20  list-none montserrat   text-lg text-[#EFECE6] ">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`text-lg  transition-all ${
                    activeSection === id
                      ? "text-[#ff4a00d6]  border-b-2 border-[#ff4a00d6] "
                      : "hover:text-black"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/*  Right: Log In & Sign Up (Large Screen) */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="group relative px-3 py-2 bg-gradient-to-l from-[#FF5C1980] to-[#FF6A00] text-white rounded-lg flex items-center font-bold text-lg overflow-hidden">
              <span className="mr-2">Get Started</span>

              <span className="relative w-5 h-5 flex items-center justify-center">
                {/* Default Icon */}
                <CgArrowTopRightR className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                {/* Hover Icon */}
                <BsArrowRight className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              </span>
            </button>
          </div>

          {/*  Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none text-[#ffd5a5]"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/*  Mobile Menu */}
      </nav>
      {isOpen && (
        <div className="lg:hidden fixed top-[93px] w-full bg-[#ffe6d4]  text-center p-4 z-40 shadow-md transition-all duration-300 left-4 right-5">
          <ul className="flex flex-col gap-4">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    handleScroll(id);
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium hover:text-gray-200"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-4">
            <div className="w-full justify-center flex">
              <button className="group relative px-3 py-2 bg-gradient-to-l from-[#FF5C1980] to-[#FF6A00] text-white rounded-lg flex items-center font-bold text-lg overflow-hidden">
                <span className="mr-2">Get Started</span>

                <span className="relative w-5 h-5 flex items-center justify-center">
                  {/* Default Icon */}
                  <CgArrowTopRightR className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                  {/* Hover Icon */}
                  <BsArrowRight className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
