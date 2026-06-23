function SummaryCard({ title, amount }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{title}</h3>
      <h2>₹{amount}</h2>
    </div>
  );
}

export default SummaryCard;