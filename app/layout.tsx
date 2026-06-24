import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atharv | Personal Portfolio",
  description: "Atharv Chandratre — Software Engineer II at DoorDash. UIUC M.S. in Computer Science (Machine Learning). Backend, data systems, and applied ML.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
