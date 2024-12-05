import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = function () {
  return (
    <Link to="/">
      <img src={logo} alt="STORE" className="logo" />
    </Link>
  );
};

export default Logo;
