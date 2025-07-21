import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography, Stack } from '@mui/material';

const data = [
  { name: 'Renda', value: 6500, color: '#00A86B' },
  { name: 'Despesas', value: 4800, color: '#FF3B3B' },
];

const COLORS = data.map((item) => item.color);

export default function HalfPieChart() {
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
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          cornerRadius={10} // arredondar os pés das barras
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <Stack direction="row" spacing={4} mt={2}>
        {data.map((item) => (
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
              {item.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
