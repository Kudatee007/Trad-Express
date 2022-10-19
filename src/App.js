
import "./App.css";
import Navbarr from "./TradExpress/Navbarr";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLandingPage from "./TradExpress/MainLandingPage";
import Login from "./TradExpress/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./TradExpress/GetStarted";
import VerifyMail from "./TradExpress/VerifyMail";
import InstantSell from "./TradExpress/InstantSell";

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Kuda-T");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="getStarted"
            element={
              <GetStarted username={username} setUsername={setUsername} />
            }
          />
          <Route path="instantBuy/Sell" element={<InstantSell />} />
          <Route
            path="verifyMail"
            element={<VerifyMail username={username} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
