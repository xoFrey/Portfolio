import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ aboutRef, homeRef, techStackRef, slideShowRef }) => {
  return (
    <nav>
      <div className='logo-container'>
        <a
          onClick={() =>
            homeRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className='logo '>
          IA
        </a>
      </div>
      <div>
        <ul>
          <li>
            <Link
              onClick={() =>
                homeRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              About me
            </Link>
          </li>

          <li>
            <Link
              onClick={() =>
                techStackRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                slideShowRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Projects
            </Link>
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
