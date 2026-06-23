function BudgetTracker() {

  const budget = 30000;
  const spent = 20000;

  const percentage =
    (spent / budget) * 100;

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        boxShadow:
          "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Monthly Budget</h2>

      <p>
        ₹{spent} of ₹{budget}
      </p>

      <div
        style={{
          height: "20px",
          background: "#ddd",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "green",
            borderRadius: "10px"
          }}
        />
      </div>

      <p>
        Remaining:
        ₹{budget - spent}
      </p>
    </div>
  );
}

export default BudgetTracker;