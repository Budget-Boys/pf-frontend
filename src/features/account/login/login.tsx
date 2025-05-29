import Input from "../../../components/input/input";
import style from "./login.module.sass"

const Login: React.FC = () => {
  return (
    <>
      <div className={style.login_container}>
        <div className={style.title_container}>
          <h1> Retorne ao gerenciamento da sua finanças </h1>
        </div>
        <form action="">
          <Input placeholder={"Nome:"} icon={"piggy-bank"} type={"text"} />
          <Input placeholder={"Senha:"} icon={"vault"} type={"password"} />
        </form>
      </div>
    </>
  );
};

export default Login;
