import React from "react";
import "./style.css";

import Trades from "./components/Trades";

const myTrades = [
  {
    id: 0,
    symbol: "EURUSD",
    volume: 100,
    date: "10-11-2020",
    pnl: 2000,
    notes: "none",
    tags: []
  },
  {
    id: 1,
    symbol: "AUDUSD",
    volume: 150,
    date: "10-10-2020",
    pnl: 10000,
    notes: "none",
    tags: []
  },
  {
    id: 2,
    symbol: "GBPUSD",
    volume: 200,
    date: "10-12-2020",
    pnl: 1000,
    notes: "none",
    tags: []
  }
];

export default function App() {
  return (
    <div>
      <h1>Trade Logic</h1>
      <p>Start editing to see some magic happen :)</p>
      <Trades initialTrades={myTrades} />
    </div>
  );
}
