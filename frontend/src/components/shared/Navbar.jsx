import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaBagShopping, FaBarsStaggered } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthenticationContext/AuthContext";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function Navbar() {
  const { userData, logout } = useAuthContext();
  const { user } = userData;
  const navigate = useNavigate();
  const ref = useRef(null);
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);

  const handleNavClick = () => setNavLinkOpen(!navLinkOpen);
  const handleLinkClick = () => setLinkOpen(!linkOpen);

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
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleNavClick}
            >
              <FaBarsStaggered />
            </div>
            {navLinkOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 gap-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={handleNavClick}>
                  {user ? (
                    <NavLink
                      to="/customer/home-page"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Home
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Home
                    </NavLink>
                  )}
                </li>
                <li onClick={handleNavClick}>
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li onClick={handleNavClick}>
                  <NavLink
                    to="/faqs"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    FAQs
                  </NavLink>
                </li>
              </ul>
            )}
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
          {user ? (
            <div className="dropdown dropdown-end" onClick={handleLinkClick}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://res.cloudinary.com/dk1fim9hl/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1722352694/TiffinBox/generic-profile-photo_ym4olv.png"
                  />
                </div>
              </div>
              {linkOpen && (
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box w-52 gap-2"
                >
                  <li onClick={handleLinkClick}>
                    <NavLink
                      to="/customer/view-profile"
                      className={({ isActive }) =>
                        isActive
                          ? "text-secondary"
                          : "hover:text-primary transition"
                      }
                    >
                      <FaUser /> Profile
                    </NavLink>
                  </li>
                  <li onClick={handleLinkClick}>
                    <NavLink
                      to="/customer/order-history"
                      className={({ isActive }) =>
                        isActive
                          ? "text-secondary"
                          : "hover:text-primary transition"
                      }
                    >
                      <FaBagShopping /> Orders
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => {
                        logout();
                        handleLinkClick();
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-slate-100 btn btn-secondary">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
