import Input from "../../../components/input/input";
import style from "./register.module.sass";
import img from "../../../assets/images/banknotes3.png";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { POST } from "../../../services/post";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    cpfcnpj: "",
    phone: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await POST("http://localhost:8080/users", form);

    if (result.success) {
      console.log("Sucesso ao realizar o login", result.message);
      console.log(form);
      navigate("/login");
    } else {
      console.error("Erro ao registrar usuário:", result.message);
      console.log(form);
    }
  }

  return (
    <div className={style.register_container}>
      <div className={style.title_container}>
        <h1> Começe a organizar suas finanças </h1>
      </div>
      <img src={img} alt="" />
      <form action="" id="register-form" onSubmit={handleSubmit}>
        <Input
          placeholder={"Nome:"}
          icon={"piggy-bank"}
          type={"text"}
          onChange={handleChange}
          inputName={"name"}
        />
        <Input
          placeholder={"CPF:"}
          icon={"digital-tachograph"}
          type={"text"}
          onChange={handleChange}
          inputName={"cpfcnpj"}
        />
        <Input
          placeholder={"E-mail:"}
          icon={"envelope"}
          type={"text"}
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
  );
};

export default Register;
