import React from "react"
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/MainComponent";

// import Main from "./Components/Main";
// import Staff from "./Components/StaffListComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        {/* Assignment Code
        <Main /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
