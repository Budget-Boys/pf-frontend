import FinancialEntry from "./financialEntry/financialEntry";
import HeaderMain from "./header_main/headerMain";
import style from "./main.module.sass";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <HeaderMain />
        <FinancialEntry />
      </main>
    </>
  );
};

export default Main;
