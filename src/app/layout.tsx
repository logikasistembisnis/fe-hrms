import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "People Partner",
  description: "We believe that you as part of our family is the most important people to be manage and take care, allow us to give you great people experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
