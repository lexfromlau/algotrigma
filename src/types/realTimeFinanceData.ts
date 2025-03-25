type StockData = {
  symbol: string;
  type: string;
  name: string;
  price: number;
  change: number;
  change_percent: number;
  previous_close: number;
  pre_or_post_market: number;
  pre_or_post_market_change: number;
  pre_or_post_market_change_percent: number;
  last_update_utc: string;
  currency: string;
  exchange: string;
  exchange_open: string;
  exchange_close: string;
  timezone: string;
  utc_offset_sec: number;
  country_code: string;
  google_mid: string;
};

type NewsData = {
  article_title: string;
  article_url: string;
  article_photo_url: string;
  source: string;
  post_time_utc: string;
  stocks_in_news: StockData[];
};

export interface MarketTrends {
  status: string;
  request_id: string;
  data: {
    trends: StockData[];
    news: NewsData[];
  };
}

export interface CompanyOverviewResponse {
  status: string;
  request_id: string;
  data: {
    symbol: string;
    name: string;
    type: string;
    price: number;
    open: number;
    high: number;
    low: number;
    volume: number;
    previous_close: number;
    change: number;
    change_percent: number;
    pre_or_post_market: number;
    pre_or_post_market_change: number;
    pre_or_post_market_change_percent: number;
    last_update_utc: string;
    country_code: string;
    exchange: string;
    exchange_open: string;
    exchange_close: string;
    timezone: string;
    utc_offset_sec: number;
    currency: string;
    about: string;
    year_low: number;
    year_high: number;
    primary_exchange: string;
    company_website: string;
    company_country_code: string;
    company_country: string;
    company_state: string;
    company_city: string;
    company_street_address: string;
    company_ceo: string;
    company_employees: number;
    company_cdp_score: string;
    company_founded_date: string;
    company_cdp_url: string;
    avg_volume: number;
    company_pe_ratio: number;
    company_market_cap: number;
    company_dividend_yield: number;
    company_industry: string;
    company_sector: string;
    wikipedia_url: string;
    google_mid: string;
  };
}

export interface StockTimeSeriesProps {
  status: string;
  request_id: string;
  data: {
    symbol: string;
    type: string;
    price: number;
    previous_close: number;
    change: number;
    change_percent: number;
    pre_or_post_market: number;
    pre_or_post_market_change: number;
    pre_or_post_market_change_percent: number;
    last_update_utc: string;
    time_series: {
      [key: string]: {
        price: number;
        change: number;
        change_percent: number;
        volume: number;
      };
    };
    key_events: [];
    utc_offset_sec: number;
    interval_sec: number;
    period: string;
  };
}
