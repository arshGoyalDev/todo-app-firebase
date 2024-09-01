import { Josefin_Slab } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/components.css"

import ContextContainer from "@/context";

const josefinSlab = Josefin_Slab({ subsets: ["latin"] });

const metadata = {
  title: "Todo App",
  description: "A todo app to manage all your tasks",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={josefinSlab.className}>
        <ContextContainer>{children}</ContextContainer>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
