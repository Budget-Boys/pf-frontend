import style from "./balance.module.sass";

const Balance: React.FC = () => {
  return (
    <>
      <div className={style.section_balance}>
        <div className={style.container_balance}>
          <div className={style.balance_total}>
            <p>Balanço total:</p>
            <span>R$ 0,00</span>
          </div>
          <div className={style.balance_summary}>
            <div className={style.balance_summary_item}>
              <p>Receitas</p>
              <span>R$ 0,00</span>
            </div>
            <div className={style.balance_summary_item}>
              <p>Despesas</p>
              <span>R$ 0,00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
