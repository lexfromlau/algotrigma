import React from "react";
import { fetchData } from "./util/fetchData";

const App = () => {
  const handleFetchData = () => {
    fetchData(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((data) => {
        const dailyTimeSeries = data["Time Series FX (Daily)"];
        console.log({ dailyTimeSeries });
        console.log({ data });
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>Fetch data:</div>
      <button onClick={() => handleFetchData()}>fetch</button>
    </>
  );
};

export default App;
