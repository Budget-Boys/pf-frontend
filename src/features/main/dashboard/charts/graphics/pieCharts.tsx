import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { GET } from '../../../../../services/get';

interface BalanceData {
  status: "POSITIVE" | "NEGATIVE";
  expensesAmountTotal: number;
  incomesAmountTotal: number;
  balance: number;
}
interface ChartsProps {
  reloadTrigger: number;
}
const HalfPieChart: React.FC<ChartsProps> = ({ reloadTrigger }) => {
  const [balanceData, setBalanceData] = useState<BalanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        setLoading(true);
        const result = await GET(
          `http://localhost:9000/api/finance/balance/${localStorage.getItem("userId")}`
        );

        if (result.success) {
          setBalanceData(result.data);
        } else {
          setError("Erro ao carregar dados do gráfico");
        }
      } catch (err) {
        setError("Erro na conexão com o servidor");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalanceData();
  }, [reloadTrigger]);

  const chartData = [
    {
      name: 'Receitas',
      value: balanceData?.incomesAmountTotal || 0,
      color: '#00A86B'
    },
    {
      name: 'Despesas',
      value: balanceData?.expensesAmountTotal || 0,
      color: '#FF3B3B'
    },
  ];

  const COLORS = chartData.map((item) => item.color);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <Typography>Carregando gráfico...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {/* Gráfico em meio círculo */}
      <PieChart width={300} height={150}>
        <Pie
          data={chartData}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          cornerRadius={10}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Mostrar apenas os valores totais de receitas e despesas */}
      <Stack direction="row" spacing={4} mt={2}>
        <Box textAlign="center">
          <Typography variant="caption" color="text.secondary">
            Receitas
          </Typography>
          <Typography variant="body1" color="success.main" fontWeight={600}>
            {balanceData?.incomesAmountTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="caption" color="text.secondary">
            Despesas
          </Typography>
          <Typography variant="body1" color="error.main" fontWeight={600}>
            {balanceData?.expensesAmountTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Typography>
        </Box>
      </Stack>

      {/* Mostrar o saldo total */}
      <Typography
        variant="subtitle1"
        mt={2}
        color={balanceData?.status === "POSITIVE" ? "success.main" : "error.main"}
        fontWeight={700}
      >
        Saldo: {balanceData?.balance.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </Typography>
    </Box>
  );
}
export default HalfPieChart;