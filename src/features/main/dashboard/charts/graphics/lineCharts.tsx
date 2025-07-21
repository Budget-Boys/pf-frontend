import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "S1", renda: 10000, despesas: 5000 },
  { week: "S2", renda: 25000, despesas: 12000 },
  { week: "S3", renda: 45000, despesas: 22000 },
  { week: "S4", renda: 73418, despesas: 34827 },
];

const ChartLineBalance = () => {
  return (
    <div style={{ width: "100%", height: 300, backgroundColor: "transparent" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
          <XAxis dataKey="week" />
          <YAxis hide />
          <Tooltip
            formatter={(value: number) =>
              value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
            }
          />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="circle"
            formatter={(value) => (
              <span style={{ fontSize: 14, color: "#555" }}>{value}</span>
            )}
          />
          <Line
            type="monotone"
            dataKey="renda"
            stroke="#00A86B"
            strokeWidth={3}
            dot={false}
            name="Renda"
          />
          <Line
            type="monotone"
            dataKey="despesas"
            stroke="#FF3B3B"
            strokeWidth={3}
            dot={false}
            name="Despesas"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLineBalance;
