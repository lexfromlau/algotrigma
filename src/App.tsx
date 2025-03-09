import { MarketTrendsOverview } from "./components/presentation/MarketTrendsOverview/MarketTrendsOverview";
import * as Styled from "./App.style";

const App = () => {
  return (
    <Styled.AppContainer>
      <MarketTrendsOverview heading="Fetch market trends" />
    </Styled.AppContainer>
  );
};

export default App;
