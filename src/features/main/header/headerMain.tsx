import style from "./headerMain.module.sass";

const HeaderMain: React.FC = () => {
  return (
    <>
      <div className={style.header_main}>
        <div className={style.configuration_container}>
          <div className={style.user_container}>
            <img src="" alt="" />
            <p>Olá, Eduardo</p>
          </div>

          <i className="fi fi-sr-settings"></i>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
