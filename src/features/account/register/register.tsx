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

    // 1. Cria o usuário
    const result = await POST("http://localhost:8080/users", form);

    if (result.success) {
      console.log("Sucesso ao criar conta", result.message);

      // 2. Dispara e-mail de boas-vindas
      const emailPayload = {
        to: "guilhermevr.figueiredo@gmail.com",
        subject: "Bem-vindo ao sistema!",
        body: `Olá ${form.name}, sua conta foi criada com sucesso!`,
      };

      try {
        await POST("http://localhost:7000/email", emailPayload);
      } catch (err) {
        console.error("Erro ao enviar e-mail:", err);
      }

      navigate("/login");
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
      <form id="register-form" onSubmit={handleSubmit}>
        <Input
          placeholder="Nome:"
          icon="piggy-bank"
          type="text"
          onChange={handleChange}
          inputName="name"
        />
        <Input
          placeholder="CPF:"
          icon="digital-tachograph"
          type="text"
          onChange={handleChange}
          inputName="cpfcnpj"
        />
        <Input
          placeholder="E-mail:"
          icon="envelope"
          type="text"
          onChange={handleChange}
          inputName="email"
        />
        <Input
          placeholder="Senha:"
          icon="vault"
          type="password"
          onChange={handleChange}
          inputName="password"
        />
      </form>
    </div>
  );
};

export default Register;
