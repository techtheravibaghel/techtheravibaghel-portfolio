import type { Metadata } from "next";
import "@/styles/theme.css";
import "@/styles/globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export const metadata: Metadata = {
  title: "techtheravibaghel | Portfolio",
  description: "My personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden  ">
        <div className="flex flex-col h-full bg-[var(--color-background)]">
          <Header />
          <main className="flex-1 overflow-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
