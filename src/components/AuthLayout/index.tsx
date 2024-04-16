"use client";
import "../../app/globals.css";
import { WagmiProvider } from "wagmi";
import { config } from "../../wagmiconfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
