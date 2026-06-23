import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {

  const [darkMode,
  setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: darkMode
          ? "#111827"
          : "#f5f7fb",

        minHeight: "100vh",

        color: darkMode
          ? "white"
          : "black"
      }}
    >
      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }

        style={{
          margin: "20px",
          padding: "10px"
        }}
      >
        {darkMode
          ? "☀️ Light"
          : "🌙 Dark"}
      </button>

      <Dashboard />
    </div>
  );
}

export default App;