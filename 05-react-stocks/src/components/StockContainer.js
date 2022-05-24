import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {

  const stockCards = stocks.map(stock => <Stock {...stock}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
