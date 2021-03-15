import React from "react";
import { useForm } from "react-hook-form";

import TradeForm from "./TradeForm";
import TradeSearch from "./TradeSearch";



const Trades = ({ initialTrades }) => {
  const [trades, setTrades] = React.useState(initialTrades);
  const [filteredTrades, setFilteredTrades] = React.useState(initialTrades);
  const [filterTerm, setFilterTerm] = React.useState(null);

  React.useEffect(() => {
    const results = trades.filter(trade => {
      if (filterTerm && filterTerm !== "") {
        return trade.symbol.toLowerCase().includes(filterTerm);
      } else {
        return trade;
      }
    });
    setFilteredTrades(results);
  }, [filterTerm, trades]);
  const onChange = e => {
    console.log(e.target.value);
    setFilterTerm(e.target.value);
  };

  const onTradeSubmit = ({
    tradeSymbolInput,
    tradePnlInput,
    tradeVolumeInput,
    tradeDateInput,
    tradeNotesInput
  }) => {
    console.log("new Trade ---");
    const newTrade = {
      id: trades.length + 1,
      symbol: tradeSymbolInput,
      pnl: tradePnlInput,
      date: tradeDateInput,
      volume: tradeVolumeInput,
      notes: tradeNotesInput
    };
    console.log(newTrade);
    setTrades([...trades, newTrade]);
  };

  return (
    <div>
      <TradeSearch onChange={onChange} />
      <br />
      <br />
      <TradeForm onTradeSubmit={onTradeSubmit} />
      <br />
      <ul>
        {filteredTrades.map(trade => (
          <li key={trade.id}>
            <span>{trade.symbol} &nbsp;</span>
            <span>{trade.pnl}&nbsp;</span>
            <span>{trade.date}&nbsp;</span>
            <span>{trade.volume}&nbsp;&nbsp;</span>
            <span>{trade.notes}&nbsp;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trades;
