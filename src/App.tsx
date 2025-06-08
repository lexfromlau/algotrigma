import * as Styled from "./App.style";

const App = () => {
  const advancedChartData = `{
          "autosize": false,
          "symbol": "CMCMARKETS:EURUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "studies": [
            "STD;Bollinger_Bands",
            "STD;RSI",
            ],
          "support_host": "https://www.tradingview.com"
        }`;

  return (
    <Styled.AppContainer>
      <Styled.AdvancedChart
        id={"advanced-eur-usd"}
        endpoint={"embed-widget-advanced-chart.js"}
        data={advancedChartData}
      />
    </Styled.AppContainer>
  );
};

export default App;
