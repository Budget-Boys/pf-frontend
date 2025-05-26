
import style from "./home.module.sass";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Inspiration from "./section_inspiration/inspiration";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.banner}>
          <div className={style.account_container}>
            <div className={style.banner_title}>
              <h1>Escolha ser <span>Pink</span>!</h1>
            </div>
            <div className={style.banner_account}>
              <p>
                Venha fazer parte desse grande ecossistema e organizar a sua
                vida!
              </p>
              <Button label={"Quero ser Pink"} variant={'banner'}/>
            </div>
          </div>
        </section>
        <section className={style.pink_content} style={{ height: '100vh' }}></section>
        <Inspiration/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
