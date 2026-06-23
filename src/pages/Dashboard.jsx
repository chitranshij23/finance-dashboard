import SummaryCard from "../components/SummaryCard";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm"; 
import ExpensePieChart from "../components/ExpensePieChart"; 
import MonthlyBarChart from "../components/MonthlyBarChart"; 
import BudgetTracker from "../components/BudgetTracker";

function Dashboard() {

  const income = 65000;
  const expenses = 15000;
  const balance = income - expenses;

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f7fb",
        minHeight: "100vh"
      }}
    >
      <h1>Personal Finance Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <SummaryCard
          title="Income"
          amount={income}
        />

        <SummaryCard
          title="Expenses"
          amount={expenses}
        />

        <SummaryCard
          title="Balance"
          amount={balance}
        />
      </div>

      <TransactionList /> 
      <TransactionForm /> 
      <ExpensePieChart />
      <MonthlyBarChart />
      <BudgetTracker />


    </div>
    
  );
}

export default Dashboard;