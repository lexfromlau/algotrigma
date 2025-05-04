/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPID_AUTH_KEY: string;
  readonly VITE_GET_STATISTICS_BY_SYMBOL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
