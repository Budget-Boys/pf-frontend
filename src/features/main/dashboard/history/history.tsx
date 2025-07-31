import { GET } from "../../../../services/get";
import style from "./history.module.sass";
import { useEffect, useState } from "react";


interface FinancialRecord {
  id: string;
  amount: number;
  category: string;
  creationDate: string;
  userId: string;
}

const History: React.FC = () => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mapeamento completo das categorias
  const categoryMap: Record<string, string> = {
    "RENT": "Aluguel",
    "UTILITIES": "Serviços públicos",
    "GROCERIES": "Mercado",
    "DINING_OUT": "Refeições fora",
    "FUEL": "Combustível",
    "SUPPLIES": "Suprimentos",
    "SUBSCRIPTIONS": "Assinaturas",
    "CLOTHING": "Roupas",
    "PERSONAL_CARE": "Cuidados pessoais",
    "HEALTH": "Saúde",
    "ENTERTAINMENT": "Entretenimento",
    "TRAVEL": "Viagem",
    "HOBBIES": "Hobbies",
    "PHONE": "Telefone",
    "INTERNET": "Internet",
    "SOFTWARE": "Software",
    "CREDIT_CARD": "Cartão de crédito",
    "PETS": "Pets",
    "SALARY": "Salário",
    "FREELANCE": "Freelance",
    "BUSINESS": "Negócios",
    "PENSION": "Pensão",
    "INVESTMENTS": "Investimentos"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [expensesResult, incomesResult] = await Promise.all([
          GET("http://localhost:9000/api/finance/expenses"),
          GET("http://localhost:9000/api/finance/incomes")
        ]);

        if (expensesResult.success && incomesResult.success) {
          const combinedData = [
            ...(expensesResult.data || []),
            ...(incomesResult.data || [])
          ].sort((a, b) => 
            new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
          );
          
          setRecords(combinedData);
        } else {
          setError("Erro ao carregar dados financeiros");
        }
      } catch (err) {
        setError("Erro na conexão com o servidor");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryName = (category: string) => {
    return categoryMap[category] || category;
  };

  if (loading) {
    return <div className={style.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={style.error}>{error}</div>;
  }

  return (
    <div className={style.section_history}>
      <div className={style.lineTitle}>
        <h4>Histórico</h4>
      </div>
      <div className={style.container_history}>
        {records.length > 0 ? (
          <table className={style.history_table}>
            <thead>
              <tr>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td className={record.amount >= 0 ? style.positive : style.negative}>
                    {formatCurrency(record.amount)}
                  </td>
                  <td>{getCategoryName(record.category)}</td>
                  <td>{formatDate(record.creationDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={style.empty}>Nenhum registro encontrado</div>
        )}
      </div>
    </div>
  );
};

export default History;