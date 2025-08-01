import { NavLink } from "react-router-dom";
import style from "./menu.module.sass";
import logo from "../../../assets/logo/logo_tr.png";

const Menu: React.FC = () => {
  return (
    <>
      <div className={style.container_menu}>
        <nav>
          <NavLink to="dashboard" className={style.menu_item}>
            <i className="fi fi-sr-dashboard"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="settings" className={style.menu_item}>
            <i className="fi fi-sr-settings"></i>
            <span>Configurações</span>
          </NavLink>
        </nav>

        <img className={style.logo} src={logo}></img>
      </div>
    </>
  );
};

export default Menu;
