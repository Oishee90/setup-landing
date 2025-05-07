import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsArrowRightSquare } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "pricing", id: "pricing" },
    { name: "FAQ", id: "Faq" },
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

  return (
    <div>
      <nav className=" container mx-auto    text-white ">
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
            {user ? (
              <Link
                to="/dashboamontserratrd"
                className=" md:text-base rounded-3xl bg-gradient-to-b from-[#00B2F7] via-[#1E3A8A]  to-[#080F24] px-3 py-2  sm:px-5 sm:py-2.5 text-sm font-medium text-white"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <NavLink
                  to="/signUp"
                  className="dm-sans md:text-base rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF6A007F] sm:px-5 sm:py-2.5 text-sm font-medium text-white flex items-center gap-3 group transition-all duration-300"
                >
                  Get started
                  {/* Default icon (visible) */}
                  <BsArrowUpRightSquare className="text-white block group-hover:hidden transition-all duration-300" />
                  {/* Hover icon (hidden by default) */}
                  <BsArrowRightSquare className="text-white hidden group-hover:block transition-all duration-300" />
                </NavLink>
              </>
            )}
          </div>

          {/*  Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none text-black"
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
        <div className="lg:hidden mt-4  bg-[#a0d2ff] rounded-tl-2xl rounded-br-2xl text-center p-4  container mx-auto m-4 absolute z-50">
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
            {user ? (
              <Link
                to="/dashboard"
                className="dm-sans md:text-base px-5 py-2.5 text-sm font-medium text-[#000000]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="dm-sans md:text-base px-5 py-2.5 text-sm font-medium text-[#000000]"
                >
                  Log in
                </Link>
                <div className="w-full justify-center flex">
                  <NavLink
                    to="/signUp"
                    className="dm-sans md:text-base rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF6A007F] sm:px-5 sm:py-2.5 text-sm font-medium text-[#080808] flex items-center gap-3 group transition-all duration-300"
                  >
                    Get started
                    {/* Default icon (visible) */}
                    <BsArrowUpRightSquare className="text-[#333333] hover:text-white block group-hover:hidden transition-all duration-300" />
                    {/* Hover icon (hidden by default) */}
                    <BsArrowRightSquare className="text-[#333333] hover:text-white hidden group-hover:block transition-all duration-300" />
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
