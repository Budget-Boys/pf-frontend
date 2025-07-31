
import HeaderMain from "../header/headerMain";
import Balance from "./balance/balance";
import Charts from "./charts/charts";
import FinancialEntry from "./financialEntry/financialEntry";
import History from "./history/history";


const Dashboard: React.FC = () => {
  return (
    <> 
          <Balance />
          <Charts />
          <FinancialEntry />
          <History />
    </>
  );
};

export default Dashboard;
