import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddStock}) {

  const stockCards = stocks.map(stock => <Stock {...stock} onClickStock={onAddStock} />);

  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
