import React from "react";
const TradeSearch = ({ onChange }) => {
  return (
    <div>
      <input
        type="text"
        id="tradeSearch"
        name="tradeSearch"
        onChange={onChange}
      />
    </div>
  );
};

export default TradeSearch;
