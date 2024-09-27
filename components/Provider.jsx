"use client";

import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import Fetcher from "./Fetcher";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 3000,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        {children}
      </SWRConfig>
    </SessionProvider>
  );
};

export default Provider;
