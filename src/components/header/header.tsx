import Button from "../button/button";
import style from "./header.module.sass";
import logo from "../../assets/logo/logo_tr.png"
const Header: React.FC = () => {
  return (
    <header>
      <img className={style.logo} src={logo}></img>
      <ul>
        <li>
          <Button label={"Quero ser Pink"} variant={""} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
