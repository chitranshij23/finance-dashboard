import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 18000 },
  { month: "Mar", amount: 15000 },
  { month: "Apr", amount: 22000 },
  { month: "May", amount: 17000 }
];

function MonthlyBarChart() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Monthly Spending</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyBarChart;