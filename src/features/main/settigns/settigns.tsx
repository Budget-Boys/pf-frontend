import { NavLink } from "react-router-dom";
import Input from "../../../components/input/input";
import style from "./settigns.module.sass";

const Settigns: React.FC = () => {
  return (
    <section className={style.section_settigns}>
      {/* Menu lateral */}
      <div className={style.container_menu_settigns}>
        <NavLink to="geral" className={style.menu_item}>
          <i className="fi fi-sr-settings"></i>
          <span>Geral</span>
        </NavLink>
        <NavLink to="aparencia" className={style.menu_item}>
          <i className="fi fi-sr-user"></i>
          <span>Aparência</span>
        </NavLink>
      </div>

      {/* Formulário de configurações */}
      <form className={style.form_settigns}>
        {/* Nome */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Nome</h2>
          <p className="text-sm text-gray-500 mb-1">
            Isso permitirá que você envie ou altere seu nome exibido.
          </p>
          <Input placeholder="Nome" icon="arrow-circle-right" type="text" />
        </div>

        {/* Email */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Endereço de E-mail</h2>
          <p className="text-sm text-gray-500 mb-1">
            Este e-mail não pode ser alterado.
          </p>
          <Input placeholder="E-mail" icon="envelope" type="email" />
        </div>

        {/* Data de nascimento */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Data de Nascimento</h2>
          <p className="text-sm text-gray-500 mb-1">
            Esta informação não será exibida em outros perfis.
          </p>
          <Input
            placeholder="01 de Janeiro de 1998"
            icon="calendar-day"
            type="date"
          />
        </div>

        {/* Cargo */}
        <div className={style.input_container}>
          <h2 className="text-lg font-semibold">Cargo Atual</h2>
          <p className="text-sm text-gray-500 mb-1">
            Esta informação não será exibida em outros perfis.
          </p>
          <Input placeholder="Trabalho atual" icon="briefcase" type="text" />
        </div>

        {/* Alterar senha */}
        <div className={style.password_section}>
          <h2 className="text-lg font-semibold">Alterar Senha</h2>
          <p className="text-sm text-gray-500 mb-4">
            Você pode alterar sua senha a qualquer momento que achar necessário por segurança.
          </p>

          <div className={style.input_container}>
            <label>Sua senha atual</label>
            <Input placeholder="********" icon="" type="password" />
          </div>

          <div className={style.input_container}>
            <label>Nova senha</label>
            <Input placeholder="********" icon="" type="password" />
          </div>

          <div className={style.input_container}>
            <label>Confirme a nova senha</label>
            <Input placeholder="********" icon="" type="password" />
          </div>
        </div>

        {/* Botão de salvar */}
        <button type="submit" className={style.btn_settigns}>
          Salvar Alterações
        </button>
      </form>
    </section>
  );
};

export default Settigns;
