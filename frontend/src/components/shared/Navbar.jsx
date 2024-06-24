import { NavLink } from "react-router-dom";
import logo from "../../assets/TiffinBox.png";
import { useEffect, useRef } from "react";

function Navbar() {
  const ref = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      ref.current.classList.add("shadow-md");
    } else {
      ref.current.classList.remove("shadow-md");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      ref={ref}
      className="fixed z-50 flex justify-center w-full bg-base-100"
    >
      <nav className="max-w-5xl navbar">
        <div className="gap-2 navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 gap-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  FAQs
                </NavLink>
              </li>
            </ul>
          </div>
          <a href="#" className="cursor-pointer">
            <img src={logo} alt="tiffin box" className="w-10" />
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-8 px-1">
            <li>
              <a href="#" className="link link-hover">
                Home
              </a>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) => (isActive ? "text-secondary" : "")}
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-secondary">Login</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
