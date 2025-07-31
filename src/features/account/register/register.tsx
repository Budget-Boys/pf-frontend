import Input from "../../../components/input/input";
import style from "./register.module.sass";
import img from "../../../assets/images/banknotes3.png";
import { useState, type ChangeEvent } from "react";
import { POST } from "../../../services/post";

const Register: React.FC = () => {
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
    const result = await POST("http://localhost:9000/api/users", form);

    if (result.success) {
      console.log(form);
    } else {
      console.error("Erro ao registrar usuário:", result.message);

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
