/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_VANTAGE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
