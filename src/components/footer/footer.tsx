import style from './footer.module.sass';

const Footer: React.FC = () => {

  return (
    <footer>
      <div className={style.footer_container}>
        <div className={style.developers_container}>
          <h5>Desenvolvedores:</h5>
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
        
        <div className={style.midias_container}>
          <h5>Redes Sociais</h5>
          <ul>
            <li><i className="fi fi-brands-github"></i></li>
            <li><i className="fi fi-brands-instagram"></i></li>
            <li><i className="fi fi-brands-youtube"></i></li>
            <li><i className="fi fi-brands-twitter-alt"></i></li>
          </ul>
        </div>
        <div className={style.copy_container}>
          <p>© 2025 Budget Boys Ltda. - Serviços Financeiros. 00.000.000/0001-00. Rua Fictícia, 123 - Cidade, UF - 00000-000.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
