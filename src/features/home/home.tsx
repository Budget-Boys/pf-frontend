import React, { useState } from "react";
import style from "./home.module.sass";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.banner}>
          <div className={style.account_container}>
            <div className={style.banner_title}>
              <h1>Escolha o ser <span>Pink</span>!</h1>
            </div>
            <div className={style.banner_account}>
              <p>
                Venha fazer parte desse grande ecossistema e organizar a sua
                vida!
              </p>
              <Button label={"Quero ser Pink"} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
