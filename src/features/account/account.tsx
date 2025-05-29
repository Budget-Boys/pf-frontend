import { NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "./account.module.sass";
import { useEffect } from "react";

interface AccountProps {
  route?: string; 
}

const Account: React.FC<AccountProps> = ({ route }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (route) {
      navigate(route);
    }
  }, [route, navigate]);

  return (
    <>
      <div className={style.account_container}>
        <div className={style.account_close}>
          <NavLink to="/">
            <i className="fi fi-sr-minus-small"></i>
          </NavLink>
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
