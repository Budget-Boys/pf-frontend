
import { useState } from "react";
import Balance from "./balance/balance";
import Charts from "./charts/charts";
import FinancialEntry from "./financialEntry/financialEntry";
import History from "./history/history";


const Dashboard: React.FC = () => {
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const triggerReload = () => setReloadTrigger(prev => prev + 1);

  return (
    <>
      <Balance reloadTrigger={reloadTrigger} />
      <Charts reloadTrigger={reloadTrigger}/>
      <FinancialEntry onReload={triggerReload} />
      <History reloadTrigger={reloadTrigger} />
    </>
  );
};


export default Dashboard;
