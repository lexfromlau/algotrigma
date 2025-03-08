import React from "react";
import { fetchData } from "./util/fetchData";

interface TickerSearchData {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
  }[];
}

const App = () => {
  const [tickerData, setTickerData] = React.useState<TickerSearchData>();

  const sendSearchDebounced = (searchValue: string) => {
    const url = `${
      import.meta.env.VITE_VANTAGE_BASE_URL
    }/query?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=${
      import.meta.env.VITE_API_KEY
    }`;

    setTimeout(async () => {
      const fetchResult = await fetchData<TickerSearchData>(url);
      setTickerData(fetchResult);
    }, 500);
  };

  return (
    <>
      <div>Fetch data:</div>
      <label htmlFor="ticker-search" />
      <input
        id="ticker-search"
        type="text"
        onChange={(e) =>
          e.target.value.length >= 3 && sendSearchDebounced(e.target.value)
        }
      />
      {tickerData?.bestMatches !== undefined &&
        tickerData.bestMatches.length > 0 &&
        tickerData.bestMatches.map((dataObj) => (
          <p>{`${dataObj["1. symbol"]} - ${dataObj["2. name"]}`}</p>
        ))}
    </>
  );
};

export default App;
