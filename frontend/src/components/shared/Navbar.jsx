import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function Navbar() {
  const ref = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 10) {
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
      className="sticky top-0 z-50 flex justify-center w-full bg-base-100"
    >
      <nav className="max-w-5xl navbar">
        <div className="gap-2 navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 gap-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
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
          <Link to="/" className="cursor-pointer">
            <img
              src="https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262725/Tiffin%20Box/nldinb3ipt9tegyc2hzs.png"
              alt="tiffin box"
              className="w-10"
            />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-8 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-primary transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-primary transition"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-primary transition"
                }
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="text-slate-100 btn btn-secondary">Login</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
