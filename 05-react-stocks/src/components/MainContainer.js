import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocksArr, setStocksArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      // .then(dataArr => setStocksArr(dataArr))
      .then(setStocksArr)
  }, [])

  const addToPortfolio = id => {
    console.log('id: ', id);

  }
  
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksArr} onAddStock={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
