import * as Styled from "./App.style";
import { StockTimeSeries } from "./pages/StockTimeSeries/StockTimeSeries";

const App = () => {
  return (
    <Styled.AppContainer>
      <StockTimeSeries />
    </Styled.AppContainer>
  );
};

export default App;
