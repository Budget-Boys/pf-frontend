import { GET } from "../../../../services/get";
import style from "./balance.module.sass";
import { useEffect, useState } from "react";


interface BalanceData {
  status: "POSITIVE" | "NEGATIVE";
  expensesAmountTotal: number;
  incomesAmountTotal: number;
  balance: number;
}

const Balance: React.FC = () => {
  const [balanceData, setBalanceData] = useState<BalanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        setLoading(true);
        const result = await GET(
          "http://localhost:9000/api/finance/balance/aa80b0eb-ec68-475c-8026-f4346854d75c"
        );

        if (result.success) {
          setBalanceData(result.data);
        } else {
          setError("Erro ao carregar dados do saldo");
        }
      } catch (err) {
        setError("Erro na conexão com o servidor");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalanceData();
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  if (loading) {
    return <div className={style.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={style.error}>{error}</div>;
  }

  return (
    <div className={style.section_balance}>
      <div className={style.container_balance}>
        <div
          className={`${style.balance_total} ${
            balanceData?.status === "POSITIVE"
              ? style.positive
              : balanceData?.status === "NEGATIVE"
              ? style.negative
              : ""
          }`}
        >
          <p>Balanço total:</p>
          <span>{formatCurrency(balanceData?.balance || 0)}</span>
        </div>
        <div className={style.balance_summary}>
          <div className={style.balance_summary_item}>
            <p>Receitas</p>
            <span className={style.positive}>
              {formatCurrency(balanceData?.incomesAmountTotal || 0)}
            </span>
          </div>
          <div className={style.balance_summary_item}>
            <p>Despesas</p>
            <span className={style.negative}>
              {formatCurrency(balanceData?.expensesAmountTotal || 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;