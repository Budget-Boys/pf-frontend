import CardFinancialEntry from "./cardFinancialEntry/cardFinancialEntry";
import style from "./financialEntry.module.sass";

interface FinancialEntryProps {
  onReload: () => void;
}

const FinancialEntry: React.FC<FinancialEntryProps> = ({ onReload }) => {
  return (
    <div className={style.container_financialEntry}>
      <div className={style.lineTitle}>
        <h4>Cadastre suas finanças</h4>
      </div>
      <div className={style.group_financialEntry}>
        <CardFinancialEntry text={"Renda"} icon={"wallet-money"} onReload={onReload} />
        <CardFinancialEntry text={"Despezas"} icon={"signal-alt-2"} onReload={onReload} />
      </div>
    </div>
  );
};


export default FinancialEntry;
