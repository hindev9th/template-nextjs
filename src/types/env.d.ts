declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;

    NEXT_PUBLIC_APP_ENV: string;
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_APP_API_URL: string;
  }
}
