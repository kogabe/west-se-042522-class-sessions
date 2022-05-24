import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onRemoveStock}) {

  const stockCards = stocks.map(stock => <Stock {...stock} onClickStock={onRemoveStock} />);

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockCards
      }
    </div>
  );
}

export default PortfolioContainer;
