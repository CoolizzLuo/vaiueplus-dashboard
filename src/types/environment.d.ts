/* eslint-disable no-unused-vars */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SERVER_URL: string;
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
    }
  }
}
