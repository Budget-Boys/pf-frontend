import CardFinancialEntry from "./cardFinancialEntry/cardFinancialEntry";
import style from "./financialEntry.module.sass";

const FinancialEntry: React.FC = () => {
  return (
    <>
      <div className={style.container_financialEntry}>
        <div className={style.lineTitle}>
          <h4>Cadastre suas finanças</h4>
        </div>
        <div className={style.group_financialEntry}>
          <CardFinancialEntry text={"Renda"} icon={"wallet-money"} />
          <CardFinancialEntry text={"Despezas"} icon={"signal-alt-2"} />
        </div>
      </div>
    </>
  );
};

export default FinancialEntry;
