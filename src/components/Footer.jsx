import "../index.css";
import "../app.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container mx-auto">
      <div className="footerInfo">
        <div className="socials flex justify-center gap-6 md:hidden">
          <div className="info">
            <h2>MAJHINpl</h2>
            <p className="text-sm mb-4">MERN Stack Developer</p>
          </div>
          <div className="socialink">
            <p>Connect on social</p>
            <ul className="flex gap-2">
              <Link to="https://www.linkedin.com/in/majhinpl/">
                <li>
                  <img src="../linkedin.png" alt="" width={24} height={24} />
                </li>
              </Link>
              <Link to="https://github.com/majhinpl">
                <li>
                  <img src="../github.png" alt="" width={24} height={24} />
                </li>
              </Link>
              <Link to="https://www.facebook.com/majhinpl">
                <li>
                  <img src="../facebook.png" alt="" width={24} height={24} />
                </li>
              </Link>
              <Link to="https://twitter.com/majhiNpl">
                <li>
                  <img src="../twitter.png" alt="" width={24} height={24} />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="latestPost"></div>
      </div>
      <div className="tagline bottom-0 flex justify-center">
        <p className="text-sm">
          &copy; All Right reserved. Made with &hearts; by{" "}
          <Link to="" className="hover:underline hover:opacity-[0.6]">
            MAJHINpl
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
