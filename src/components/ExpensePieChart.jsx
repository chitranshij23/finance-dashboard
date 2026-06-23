import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Food",
    value: 3000
  },
  {
    name: "Rent",
    value: 12000
  },
  {
    name: "Shopping",
    value: 5000
  }
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28"
];

function ExpensePieChart() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        boxShadow:
          "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Expense Breakdown</h2>

      <PieChart
        width={500}
        height={300}
      >
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index % COLORS.length
                ]
              }
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpensePieChart;