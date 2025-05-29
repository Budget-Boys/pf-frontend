import Input from "../../../components/input/input";
import style from "./register.module.sass";
import img from "../../../assets/images/banknotes3.png"

const Account: React.FC = () => {
  return (
    <div className={style.login_container}>
      <div className={style.title_container}>
        <h1> Começe a organizar suas finanças </h1>
      </div>
      <img src={img} alt="" />
      <form action="">
        <Input placeholder={"Nome:"} icon={"piggy-bank"} type={"text"} />
        <Input placeholder={"CPF:"} icon={"digital-tachograph"} type={"text"} />
        <Input placeholder={"E-mail:"} icon={"envelope"} type={"text"} />
        <Input placeholder={"Senha:"} icon={"vault"} type={"password"} />
      </form>
    </div>
  );
};

export default Account;
