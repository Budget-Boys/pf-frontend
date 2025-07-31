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

export default function HalfPieChart() {
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
  }, []);

  // Dados formatados para o gráfico
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

      <Stack direction="row" spacing={4} mt={2}>
        {chartData.map((item) => (
          <Box key={item.name} display="flex" alignItems="center">
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: item.color,
                marginRight: 1,
              }}
            />
            <Typography variant="body2" color="text.primary">
              {item.name}: {item.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Exibir o saldo total */}
      <Typography 
        variant="subtitle1" 
        mt={2}
        color={balanceData?.status === "POSITIVE" ? "success.main" : "error.main"}
      >
        Saldo: {balanceData?.balance.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </Typography>
    </Box> 
  );
}