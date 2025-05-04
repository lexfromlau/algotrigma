import * as Styled from "./App.style";
import { fetchData } from "./util/fetchData";

const App = () => {
  const handleGetStatisticsBySymbol = () => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_RAPID_AUTH_KEY,
      },
    };
    const data = fetchData(
      import.meta.env.VITE_GET_STATISTICS_BY_SYMBOL,
      options
    );
    console.log(data);
  };

  return (
    <Styled.AppContainer>
      <div
        onClick={handleGetStatisticsBySymbol}
        role="button"
        style={{
          cursor: "pointer",
          border: "1px solid lightgrey",
          padding: "12px",
          width: "fit-content",
        }}
      >
        GET statistics by symbol
      </div>
    </Styled.AppContainer>
  );
};

export default App;
