import { Outlet } from "react-router-dom";
import style from "./main.module.sass";
import Menu from "./menu/menu";
import HeaderMain from "./header/headerMain";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <Menu />
        <div className={style.container}>
          <HeaderMain />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Main;