import { NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "./account.module.sass";
import { useEffect } from "react";

interface AccountProps {
  route?: string;
}

const Account: React.FC<AccountProps> = ({ route }) => {
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const isLogin = currentPath.endsWith("/login");
  const isRegister = currentPath.endsWith("/register");

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

        <div className={style.img_container}>
          <div className={style.img_background}></div>
        </div>
        <div className={style.box_left}></div>
        <div className={style.account_rigth}>
          <div className={style.account_outlet}>
            <Outlet />
          </div>
          <div className={style.exercise_type}>
            {/* Verifica qual é a rota e renderiza o botão de acordo */}
            {!isLogin && <NavLink to="login">Login</NavLink>}
            {!isRegister && <NavLink to="register">Register</NavLink>}
            {isLogin && (
              <button form="login-form" type="submit">
                Entrar
                <i className="fi fi-sr-right"></i>
              </button>
            )}
            {isRegister && (
              <button form="register-form" type="submit">
                Cadastrar
                <i className="fi fi-sr-right"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
