import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Pages/Error_404";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/myPortfolio" element={<HomePage />} />
          <Route exact path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
