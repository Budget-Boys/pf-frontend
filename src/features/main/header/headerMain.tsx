import { useEffect, useState } from "react";
import style from "./headerMain.module.sass";
import { GET } from "../../../services/get";


const HeaderMain: React.FC = () => {
  const [userName, setUserName] = useState("Visitante");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    GET(`http://localhost:8080/users/${userId}`).then((res) => {
      if (res.success && res.data?.name) {
        setUserName(res.data.name);
      }
    });
  }, []);

  return (
    <div className={style.header_main}>
      <div className={style.configuration_container}>
        <div className={style.user_container}>
          <img src="" alt="" />
          <p>Olá, {userName}</p>
        </div>
        <i className="fi fi-sr-settings"></i>
      </div>
    </div>
  );
};

export default HeaderMain;
