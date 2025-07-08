import Input from "../../../components/input/input";
import style from "./login.module.sass";
import img from "../../../assets/images/banknotes.png";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <>
      <div className={style.login_container}>
        <div className={style.title_container}>
          <h1> Retorne ao gerenciamento da sua finanças </h1>
        </div>
        <img src={img} alt="" />
        <form action="" id="login-form" onSubmit={handleSubmit}>
          <Input
            placeholder={"Nome:"}
            icon={"piggy-bank"}
            type={"text"}
            onChange={handleChange}
            inputName={"name"}
          />
          <Input
            placeholder={"Senha:"}
            icon={"vault"}
            type={"password"}
            onChange={handleChange}
            inputName={"password"}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
