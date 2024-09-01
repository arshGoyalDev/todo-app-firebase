import { Inter } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/components.css"

import ContextContainer from "@/context";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Todo App",
  description: "A todo app to manage all your tasks",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextContainer>{children}</ContextContainer>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
