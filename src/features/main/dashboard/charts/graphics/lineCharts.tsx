/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

interface FinanceData {
  status: string;
  expensesAmountTotal: number;
  incomesAmountTotal: number;
  balance: number;
}

interface ChartData {
  month: string;
  renda: number;
  despesas: number;
}

const ChartBarBalance = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/api/finance/balance/${localStorage.getItem("userId")}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const financeData: FinanceData = await response.json();
        
        // Formatando os dados para o gráfico por mês (exemplo com dados mockados)
        const formattedData: ChartData[] = [
          {
            month: "Jan",
            renda: financeData.incomesAmountTotal,
            despesas: financeData.expensesAmountTotal,
          },
          {
            month: "Fev",
            renda: financeData.incomesAmountTotal * 0,
            despesas: financeData.expensesAmountTotal * 0,
          },
          {
            month: "Mar",
            renda: financeData.incomesAmountTotal *  0,
            despesas: financeData.expensesAmountTotal * 0,
          },
           {
            month: "Abr",
            renda: financeData.incomesAmountTotal * 0,
            despesas: financeData.expensesAmountTotal * 0,
          },

          // Adicione mais meses conforme necessário
        ];
        
        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando gráfico...</div>;
  }

  if (error) {
    return <div>Erro ao carregar dados do gráfico</div>;
  }

  // Função para formatar valores monetários
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { 
      style: "currency", 
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Componente personalizado para a legenda
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', paddingLeft: '10px' }}>
        {payload.map((entry: any, index: number) => {
          // Encontra o valor total para esta chave de dados
          const totalValue = data.reduce((sum, item) => sum + item[entry.dataKey], 0);
          
          return (
            <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: entry.color,
                marginRight: '8px'
              }} />
              <span style={{ fontSize: 14, color: '#555', marginRight: '5px' }}>
                {entry.value}
              </span>
              <span style={{ fontSize: 14, color: '#555', fontWeight: 'bold' }}>
                {formatCurrency(totalValue)}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ width: "100%", height: 300, backgroundColor: "transparent" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 0, left: 0 }}
          barCategoryGap="25%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis hide />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
          />
          <Legend 
            content={renderLegend}
            verticalAlign="top"
            align="left"
          />
          <Bar
            dataKey="renda"
            fill="#00A86B"
            name="Renda"
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
          <Bar
            dataKey="despesas"
            fill="#FF3B3B"
            name="Despesas"
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBarBalance;