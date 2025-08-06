import Input from "../../../components/input/input";
import style from "./login.module.sass";
import img from "../../../assets/images/banknotes.png";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { POST } from "../../../services/post";
import { toast } from "react-toastify";
const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
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

    const result = await POST("http://localhost:8080/login", form);

    if (result.success) {
      console.log("Sucesso ao cadastrar o usuario", result.message);
      console.log(form);

      // Armazena ID e nome no localStorage
      localStorage.setItem("userId", result.data.id);
      localStorage.setItem("userName", result.data.name);

      navigate("/main/dashboard");
    } else {
      console.error("Erro ao registrar usuário:", result.message);
      toast.error("Erro ao registrar: " + result.message);
      console.log(form);
    }
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
            placeholder={"Email:"}
            icon={"piggy-bank"}
            type={"email"}
            onChange={handleChange}
            inputName={"email"}
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
