import { NavLink, Outlet } from "react-router-dom";
import style from "./account.module.sass";

const Account: React.FC = () => {
  return (
    <>
      <div className={style.account_container}>
        <div className={style.account_close}>
          <i className="fi fi-sr-minus-small"></i>
        </div>
        <div className={style.account_outlet}>
          <Outlet />
        </div>
        <div className={style.exercise_type}>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
        </div>
      </div>
    </>
  );
};

export default Account;
