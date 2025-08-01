import { NavLink } from "react-router-dom";
import Input from "../../../components/input/input";
import style from "./settigns.module.sass";
import { useState, type ChangeEvent, type FormEvent } from "react";

const Settigns: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Cria um objeto contendo apenas os campos preenchidos
    const dataToSend: Record<string, string> = {};
    Object.entries(form).forEach(([key, value]) => {
      if (value.trim() !== "") {
        dataToSend[key] = value;
      }
    });
    console.log("Dados a serem enviados:", dataToSend);
  }

  return (
    <section className={style.section_settigns}>
      <div className={style.container_menu_settigns}>
        <NavLink to="../settings" className={style.menu_item}>
          <i className="fi fi-sr-user-skill-gear"></i>
          <span>Geral</span>
        </NavLink>
        <NavLink to="appearance" className={style.menu_item}>
          <i className="fi fi-sr-paint"></i>
          <span>Aparência</span>
        </NavLink>
      </div>

      <form className={style.form_settigns} onSubmit={handleSubmit}>
        {/* Nome */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Nome</h2>
          <p className="text-sm text-gray-500 mb-1">
            Isso permitirá que você envie ou altere seu nome exibido.
          </p>
          <Input
            placeholder="Nome:"
            icon="pig"
            type="text"
            inputName="name"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Endereço de E-mail</h2>
          <p className="text-sm text-gray-500 mb-1">
            Este e-mail não pode ser alterado.
          </p>
          <Input
            placeholder="E-mail:"
            icon="envelope"
            type="email"
            inputName="email"
            onChange={handleChange}
          />
        </div>

        {/* Telefone */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Cargo Atual</h2>
          <p className="text-sm text-gray-500 mb-1">
            Esta informação não será exibida em outros perfis.
          </p>
          <Input
            placeholder="Telefone:"
            icon="mobile-button"
            type="text"
            inputName="phone"
            onChange={handleChange}
          />
        </div>

        {/* Alterar senha */}
        <div className={style.password_section}>
          <h2 className="text-lg font-semibold">Alterar Senha</h2>
          <p className="text-sm text-gray-500 mb-4">
            Você pode alterar sua senha a qualquer momento que achar necessário
            por segurança.
          </p>

          <div className={style.input_container}>
            <Input
              placeholder="Senha atual:"
              icon="vault"
              type="password"
              inputName="currentPassword"
              onChange={handleChange}
            />
          </div>

          <div className={style.input_container}>
            <Input
              placeholder="Nova senha:"
              icon="vault"
              type="password"
              inputName="newPassword"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className={style.btn_settigns}>
          Salvar Alterações
        </button>
      </form>
    </section>
  );
};

export default Settigns;
