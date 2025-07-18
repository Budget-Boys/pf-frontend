
import Balance from "./balance/balance";
import Charts from "./charts/charts";
import FinancialEntry from "./financialEntry/financialEntry";
import HeaderMain from "./header/headerMain";
import History from "./history/history";
import style from "./main.module.sass";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <HeaderMain />
        <Balance />
        <Charts />
        <FinancialEntry />
        <History />
      </main>
    </>
  );
};

export default Main;
