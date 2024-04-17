import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import ResponsiveAppBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthLayout from "@/components/AuthLayout";
export const metadata: Metadata = {
  title: "GAAVEI",
  description: "Ok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />

      </head>
      <body className="py-0">
        <AppRouterCacheProvider options={{ key: "css" }}>
            <ThemeProvider theme={theme}>
              <AuthLayout>
                <ResponsiveAppBar />
                {children}
                <Footer />
              </AuthLayout>
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
