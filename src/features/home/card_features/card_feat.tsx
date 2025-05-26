import style from "./card_feat.module.sass";
interface CardFeatProps {
  img: string; 
  title: string;    
  description: string; 
}

const CardFeat: React.FC<CardFeatProps> = ({ img, title, description }) => {

  return (
    <div className={style.card_body}>
      <img src={img} alt="imagem caracteristica" />
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
};

export default CardFeat;