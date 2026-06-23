import { useState , useEffect } from "react";

function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

  const storedTransactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  setTransactions(storedTransactions);

}, []);

useEffect(() => {

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

}, [transactions]);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newTransaction = {
  title,
  amount
};

setTransactions([
  ...transactions,
  newTransaction
]); 

window.location.reload();

console.log("Saving:",[
    ...transactions,
    newTransaction
]);

    alert(
      `Transaction Added:
${title}
₹${amount}`
    );

    setTitle("");
    setAmount("");
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;