import style from "./inspiration.module.sass";
import img from '../../../assets/2.png';
import Button from "../../../components/button/button";

const Inspiration: React.FC = () => {
  return (
    <section className={style.inspiration}>
      <div className={style.inspiration_container}>
        <div className={style.title_container}>
          <h1> Nossa Inspiração </h1>
        </div>
        <img src={img} className={style.inspiration_img}/>
        <div className={style.inspiration_text}>
          <p>
            Acreditamos que o gerenciamento financeiro não precisa ser
            complicado ou chato. Inspirados pela simplicidade e pela beleza do
            design, criamos PinkFinance para ser uma ferramenta poderosa,
            intuitiva e agradável de usar.
          </p>
          <p>
            Queremos que você se sinta no controle, com confiança para tomar as
            melhores decisões financeiras e alcançar a liberdade que tanto
            deseja.
          </p>
        </div>
        <Button label={"Quero ser Pink"} variant={"banner"}/>
      </div>
    </section>
  );
};
export default Inspiration;
