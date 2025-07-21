import { NavLink } from "react-router-dom";
import style from "./menu.module.sass";

const Menu: React.FC = () => {
  return (
    <>
      <div className={style.container_menu}>
       <NavLink to="dashboard" className={style.menu_item}>
          <i className="fi fi-sr-home"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="settigns" className={style.menu_item}>
          <i className="fi fi-sr-settings"></i>
          <span>Configurações</span>
        </NavLink>
       
      </div>
    </>
  );
};

export default Menu;
