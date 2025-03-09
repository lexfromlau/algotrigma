import React from "react";
import { TickerSearchData } from "../../types/vantage";
import { fetchData } from "../../util/fetchData";
import { TextInputField } from "../../components/interaction/TextInputField/TextInputField";

export const TickerSearch = () => {
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
      <TextInputField
        id="ticker-search"
        placeholder="Ticker search"
        onChange={(e) =>
          e.target.value.length >= 3 && sendSearchDebounced(e.target.value)
        }
      />

      {tickerData?.bestMatches !== undefined &&
        tickerData.bestMatches.length > 0 &&
        tickerData.bestMatches.map((dataObj, idx) => (
          <p key={idx}>{`${dataObj["1. symbol"]} - ${dataObj["2. name"]}`}</p>
        ))}
    </>
  );
};
