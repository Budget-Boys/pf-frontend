import style from "./footer.module.sass";
import logo from "../../assets/logo/logo_noturno.png";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className={style.footer_container}>
        <div className={style.footer_top}>
          <div className={style.about_budgetboys}>
            <h3>Budget Boys</h3>
            <p>
              A Budget Boys é a união de jovens estudantes do IFMG (Instituto
              Federal de Minas Gerais), movidos por uma paixão em comum:
              transformar o mundo através da tecnologia. Acreditamos que a
              inovação pode e deve ser acessível, e é com esse espírito que
              desenvolvemos soluções para melhorar a vida das pessoas e impactar
              positivamente a sociedade. Mais do que apenas um projeto, somos a
              materialização da nossa visão de um futuro mais eficiente e
              inclusivo.
            </p>
          </div>

          <div className={style.developers_container}>
            <h3>Desenvolvedores:</h3>
            <ul>
              <li>Eduardo Octávio</li>
              <li>Felipe Leal</li>
              <li>Guilherme Victor</li>
              <li>Kaiky Pires</li>
              <li>João Victor Dutra</li>
              <li>Rodolfo Miranda</li>
              <li>Willian Santos</li>
            </ul>
          </div>
        </div>
        <div className={style.footer_bottom}>
          <div className={style.logo_container}>
            <img src={logo} alt="logo" />
          </div>

          <div className={style.midias_container}>
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <i className="fi fi-brands-github"></i>
              </li>
              <li>
                <i className="fi fi-brands-instagram"></i>
              </li>
              <li>
                <i className="fi fi-brands-youtube"></i>
              </li>
              <li>
                <i className="fi fi-brands-twitter-alt"></i>
              </li>
            </ul>
          </div>
          <div className={style.copy_container}>
            <p>
              © 2025 Budget Boys Ltda. - Serviços Financeiros.
              00.000.000/0001-00. Rua Fictícia, 123 - Cidade, UF - 00000-000.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
