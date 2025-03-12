import { MarketTrendsOverview } from "./components/presentation/MarketTrendsOverview/MarketTrendsOverview";
import * as Styled from "./App.style";
import { CompanyOverview } from "./components/presentation/CompanyOverview/CompanyOverview";

const App = () => {
  return (
    <Styled.AppContainer>
      <MarketTrendsOverview heading="Fetch market trends" />
      <CompanyOverview />
    </Styled.AppContainer>
  );
};

export default App;
