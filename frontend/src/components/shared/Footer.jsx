import { Link } from "react-router-dom";

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

function Footer() {
  return (
    <footer className="p-10 rounded footer footer-center bg-secondary text-accent-content">
      <nav className="grid grid-flow-col gap-4 font-medium">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/contact-us" className="link link-hover">
          Contact
        </Link>
        <Link to="/faqs" className="link link-hover">
          FAQ
        </Link>
      </nav>
      <a>
        <img
          src="https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262725/Tiffin%20Box/nldinb3ipt9tegyc2hzs.png"
          alt="tiffin box"
          className="w-10"
        />
      </a>
      <aside>
        <p className="font-medium">
          Copyright © 2024 - All right reserved by Tiffin Box
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
