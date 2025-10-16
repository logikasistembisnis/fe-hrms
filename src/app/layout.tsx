import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "People Partner",
  description: "We believe that you as part of our family is the most important people to be manage and take care, allow us to give you great people experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
