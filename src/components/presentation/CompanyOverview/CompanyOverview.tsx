import React from "react";
import { CompanyOverviewResponse } from "../../../types/realTimeFinanceData";
import { fetchData } from "../../../util/fetchData";
import * as Styled from "../../../App.style";
import { determineFontColor } from "../../../util/determineFontColor";

export const CompanyOverview: React.FC = () => {
  const [companyOverview, setCompanyOverview] =
    React.useState<CompanyOverviewResponse>();
  const handleFetch = async (symbol: string) => {
    const url = import.meta.env.VITE_RAPID_API_COMPANY_OVERVIEW_URL.replace(
      "{{symbol}}",
      symbol
    );
    const options = {
      headers: { "x-rapidapi-key": import.meta.env.VITE_RAPID_AUTH_KEY },
    };

    const companyOverviewResponse = await fetchData<CompanyOverviewResponse>(
      url,
      options
    );
    setCompanyOverview(companyOverviewResponse);
  };

  return (
    <>
      <div
        role="button"
        onClick={() => handleFetch("AAPL%3ANASDAQ")}
        style={{ cursor: "pointer" }}
      >
        Fetch company overview data
      </div>
      {companyOverview && companyOverview.status === "OK" && (
        <>
          <div>{JSON.stringify(companyOverview)}</div>
          <Styled.Card>
            <Styled.CardHeading>{companyOverview.data.name}</Styled.CardHeading>
            <Styled.Seperator />
            <Styled.ContentRow>
              <Styled.Text>
                {`current price: ${companyOverview.data.price}`}
              </Styled.Text>
              <Styled.Text>{`volume: ${companyOverview.data.volume}`}</Styled.Text>
            </Styled.ContentRow>
            <Styled.Seperator color="lightgrey" />
            <Styled.ContentRow>
              <Styled.Text>{`O: ${companyOverview.data.open} - H: ${companyOverview.data.high} - L: ${companyOverview.data.low}`}</Styled.Text>
            </Styled.ContentRow>
            <Styled.Seperator color="lightgrey" />
            <Styled.ContentRow>
              <Styled.Text>
                {`previous close: ${companyOverview.data.previous_close}`}
              </Styled.Text>
              <Styled.Text>
                {`change: ${companyOverview.data.change}`}
              </Styled.Text>
              <Styled.Text>
                {`change %: ${companyOverview.data.change_percent}`}
              </Styled.Text>
            </Styled.ContentRow>
          </Styled.Card>
        </>
      )}
    </>
  );
};
