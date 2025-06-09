/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADMIN_EMAIL: string
  readonly VITE_ADMIN_PASSWORD: string
  readonly VITE_STRIPE_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}