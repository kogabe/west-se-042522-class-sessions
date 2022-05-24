import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocksArr, setStocksArr] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      // .then(dataArr => setStocksArr(dataArr))
      .then(setStocksArr)
  }, [])

  const addToPortfolio = id => {
    const stockToAdd = stocksArr.find(stock => stock.id === id)
    setPortfolio([...portfolio, stockToAdd])
  }

  const removeFromPortfolio = id => {
    const filteredPortfolio = portfolio.filter(stock => stock.id !== id)
    setPortfolio(filteredPortfolio)
  }

  const sortedStocks = [...stocksArr].sort((stockA, stockB) => {
    if (sortBy === "Alphabetically") {
      return stockA.ticker.localeCompare(stockB.ticker)
    } else {
      return stockA.price - stockB.price
    }
  })
  
  return (
    <div>
      <SearchBar 
        onChangeSort={setSortBy}
        sortBy={sortBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} onAddStock={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onRemoveStock={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
