import Button from "../button/button";
import style from "./header.module.sass";

const Header: React.FC = () => {
  return (
    <header>
      <img className={style.logo} src=''></img>
      <ul>
        <li>
          <Button label={"Quero ser Pink"} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
