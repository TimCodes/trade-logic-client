import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

import Trades from "./components/Trades";
import LoginForm from "./components/LoginForm";
import Journal from "./screens/journal";
import { Button } from "./components/lib";

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
    <Router>
      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/">
          <div>
            <h1>Trade Logic</h1>
            <p>Start editing to see some magic happen :)</p>
            <Trades initialTrades={myTrades} />
            <LoginForm
              submitButton={<Button variant="secondary">Login</Button>}
            />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
