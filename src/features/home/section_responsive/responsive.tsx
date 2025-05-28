import style from "./responsive.module.sass";
import img from "../../../assets/images/peoples.png";

const Responsive: React.FC = () => {
  return (
    <section className={style.responsive}>
      <div className={style.responsive_container}>
        <div className={style.responsive_module}>
          <div className={style.title_container}>
            <h1> Utilize em qualquer lugar e dispositivo, a qualquer hora. </h1>
          </div>
          <img src={img} className={style.responsive_img} />
          <div className={style.responsive_text}>
            <p>
              Utilize em qualquer lugar e dispositivo. Não importa onde você
              esteja ou qual aparelho prefere — smartphones, tablets ou
              computadores —, PinkFinances te acompanha. Acesse suas finanças
              com flexibilidade e segurança, adaptando-se perfeitamente à sua
              rotina, do seu jeito, para que você tenha controle total, onde
              quer que a vida te leve.
            </p>
          </div>
        </div>
        <div className={style.responsive_img_outside}>
          <img src={img} alt="imagem" className={style.responsive_img} />
        </div>
      </div>
    </section>
  );
};
export default Responsive;
