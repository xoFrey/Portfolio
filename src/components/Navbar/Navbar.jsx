import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";

const Navbar = ({ aboutRef, homeRef }) => {
  return (
    <nav>
      <div className='logo-container'>
        <Link
          className='logo'
          to='/'>
          I
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <a
              onClick={() =>
                homeRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              About me
            </a>
          </li>
          <li>
            <Link to='/planets'>Journey</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
