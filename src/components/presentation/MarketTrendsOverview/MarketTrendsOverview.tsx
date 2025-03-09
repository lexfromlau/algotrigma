import React from "react";
import { MarketTrends } from "../../../types/realTimeFinanceData";
import { fetchData } from "../../../util/fetchData";
import * as Styled from "./MarketTrendsOverview.style";

interface MarketTrendsOverviewProps {
  heading: string;
}

export const MarketTrendsOverview: React.FC<MarketTrendsOverviewProps> = ({
  heading,
}) => {
  const [marketTrendsDataNews, setMarketTrendsDataNews] =
    React.useState<MarketTrends>();

  const handleFetch = async () => {
    const url = import.meta.env.VITE_RAPID_API_MARKET_TRENDS_URL;
    const options = {
      headers: { "x-rapidapi-key": import.meta.env.VITE_RAPID_AUTH_KEY },
    };
    const marketTrendsResult = await fetchData<MarketTrends>(url, options);
    setMarketTrendsDataNews(marketTrendsResult);
  };

  return (
    <>
      <Styled.FetchDataBtn role="button" onClick={handleFetch}>
        {heading}
      </Styled.FetchDataBtn>
      {marketTrendsDataNews !== undefined &&
        marketTrendsDataNews.status === "OK" &&
        marketTrendsDataNews.data.trends.map((trend, idx) => (
          <div key={idx}>{trend.name}</div>
        ))}
    </>
  );
};
