import React from "react";
import { CompanyOverviewResponse } from "../../../types/realTimeFinanceData";
import { fetchData } from "../../../util/fetchData";

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
        <div>{JSON.stringify(companyOverview)}</div>
      )}
    </>
  );
};
