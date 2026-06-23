import { useState, useEffect } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

      console.log("Loaded:", storedTransactions);

    setTransactions(storedTransactions);
  }, []);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Recent Transactions</h2>

      {transactions.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
            borderBottom: "1px solid #ddd"
          }}
        >
          <span>{item.title}</span>
          <span>₹{item.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;