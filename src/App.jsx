import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./component/User";
import ColorChange from "./component/ColorChange";

function App() {
  const data = "pune";
  return (
    <div>
      <h1 className="text-center fw-bold text-info">Welcome to react redux</h1>
      <User props={data} />
      <ColorChange/>
    </div>
  );
}

export default App;
