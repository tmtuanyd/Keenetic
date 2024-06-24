import { ReactNode } from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

interface FullLayoutProps {
  children: ReactNode;
}

function FullLayout({ children }: FullLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen text-main-text bg-gray-light dark:bg-black">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default FullLayout;
