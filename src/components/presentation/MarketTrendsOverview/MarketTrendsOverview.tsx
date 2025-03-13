import React from "react";
import { MarketTrends } from "../../../types/realTimeFinanceData";
import { fetchData } from "../../../util/fetchData";
import * as Styled from "../../../App.style";
import { determineFontColor } from "../../../util/determineFontColor";

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
    console.log(marketTrendsResult);
    setMarketTrendsDataNews(marketTrendsResult);
  };

  const hasTrendsNewsDataFetched =
    marketTrendsDataNews !== undefined && marketTrendsDataNews.status === "OK";

  return (
    <>
      <Styled.FetchDataBtn role="button" onClick={handleFetch}>
        {heading}
      </Styled.FetchDataBtn>
      {hasTrendsNewsDataFetched && (
        <Styled.CardList>
          {marketTrendsDataNews.data.trends.map((trend, idx) => (
            <Styled.Card key={idx}>
              <Styled.CardHeading>{trend.name}</Styled.CardHeading>
              <Styled.Seperator />
              <Styled.CardBody>
                <Styled.ContentRow>
                  <Styled.Text isTextBold>price:</Styled.Text>
                  <Styled.Text>{trend.price}</Styled.Text>
                </Styled.ContentRow>

                <Styled.ContentRow>
                  <Styled.Text isTextBold>previous close:</Styled.Text>
                  <Styled.Text>{trend.previous_close}</Styled.Text>
                </Styled.ContentRow>

                <Styled.ContentRow>
                  <Styled.Text isTextBold>change:</Styled.Text>
                  <Styled.Text>{trend.change}</Styled.Text>
                </Styled.ContentRow>

                <Styled.ContentRow>
                  <Styled.Text isTextBold>change percent:</Styled.Text>
                  <Styled.Text color={determineFontColor(trend.change_percent)}>
                    {trend.change_percent}
                  </Styled.Text>
                </Styled.ContentRow>

                <Styled.ContentRow>
                  <Styled.Text isTextBold>last update:</Styled.Text>
                  <Styled.Text>{trend.last_update_utc}</Styled.Text>
                </Styled.ContentRow>
              </Styled.CardBody>
            </Styled.Card>
          ))}
        </Styled.CardList>
      )}
      <Styled.Seperator color="gray" />
      {hasTrendsNewsDataFetched && (
        <Styled.CardList>
          {marketTrendsDataNews.data.news.map((newsItem) => (
            <Styled.Card>
              <img src={newsItem.article_photo_url} alt="article-url" />
              <Styled.CardHeading>{newsItem.article_title}</Styled.CardHeading>
              <Styled.Seperator />
              {newsItem.stocks_in_news.map((stock) => (
                <Styled.Text>{stock.name}</Styled.Text>
              ))}
            </Styled.Card>
          ))}
        </Styled.CardList>
      )}
    </>
  );
};
