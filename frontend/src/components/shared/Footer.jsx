import logo from "../../assets/TiffinBox.png";

function Footer() {
  return (
    <footer className="p-10 rounded footer footer-center bg-primary text-accent-content">
      <nav className="grid grid-flow-col gap-4 font-medium">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">FAQ</a>
      </nav>
      <a>
        <img src={logo} alt="tiffin box" className="w-10" />
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
