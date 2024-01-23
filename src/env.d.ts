/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BROWSER_GRAPHQL_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
