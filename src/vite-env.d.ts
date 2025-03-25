/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_VANTAGE_BASE_URL: string;
  readonly VITE_RAPID_API_MARKET_TRENDS_URL: string;
  readonly VITE_RAPID_AUTH_KEY: string;
  readonly VITE_RAPID_API_COMPANY_OVERVIEW_URL: string;
  readonly VITE_VANTAGE_QUOTE_ENDPOINT: string;
  readonly VITE_VANTAGE_DAILY_TIME_SERIES_ENDPOINT: string;
  readonly VITE_RAPID_API_STOCK_TIME_SERIES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
