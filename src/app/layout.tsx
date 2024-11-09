import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";

export const metadata: Metadata = {
  title: "NextJS BoilerPlate",
  description: "Plutus NextJS BoilerPlate for new NextJS projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={``}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}