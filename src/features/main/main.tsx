import style from "./main.module.sass";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <section className={style.main_section}>
          <div className={style.header_main}>
            <div className={style.configuration_container}>
               <div className={style.user_container}>
                <img src="" alt="" />
                <p>Olá, Eduardo</p>
               </div>
                <i className="fi fi-sr-eye"></i>
            </div>
               <div className={style.balance_container}>
                   <div className={style.balance_value}>
                     <p>Seu Saldo</p>
                     <p>R$: 10.000</p>
                   </div>
                 
               </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
