import Button from "../button/button";
import style from "./header.module.sass";
import logo from "../../assets/logo/logo_tr.png"
import { NavLink } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header>
      <img className={style.logo} src={logo}></img>
      <ul>
        <li>
          <NavLink to="register"><Button label={"Quero ser Pink"} variant={""} /></NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
