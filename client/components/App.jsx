import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div>React is on</div>;
};

createRoot(document.getElementById("root")).render(<App />);
