import style from "./features.module.sass";
import CardFeat from "../card_features/card_feat";

// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importação dos módulos do swiper
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";

// Importe as imagens específicas
import img from "../../../assets/images/wallet.png";
import pigTrImg from "../../../assets/images/pig.png";
import shieldImg from "../../../assets/images/shield.png";
import pizzaImg from "../../../assets/images/pizza.png";

const Features: React.FC = () => {
  return (
    <section className={style.features}>
      <div className={style.features_about}>
        <div className={style.title_container}>
          <h1> Organize suas finanças com estilo e simplicidade. </h1>
        </div>
        <img src={img} alt="Ilustração de carteira" />{" "}
        {/* Adicione um alt text significativo */}
        <div className={style.features_text}>
          <p>
            PinkFinance te ajuda a tomar o controle do seu dinheiro de forma
            intuitiva e elegante, para que você possa focar no que realmente
            importa.
          </p>
        </div>
      </div>

      <div className={style.features_cards}>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <CardFeat
              img={pigTrImg}
              title={"Metas Inteligentes"}
              description={
                "Defina e alcance seus objetivos financeiros com nosso sistema de acompanhamento de metas."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardFeat
              img={pizzaImg}
              title={"Controle de Gastos"}
              description={
                "Acompanhe suas despesas em tempo real e identifique onde seu dinheiro está indo."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardFeat
              img={shieldImg}
              title={"Segurança de Dados"}
              description={
                "Seus dados financeiros protegidos com criptografia de ponta a ponta."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
