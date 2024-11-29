import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

function Structure({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-heading">
        <Header />
      </header>
      <main className="flex-grow bg-background text-mainHeading">
        {children || <Outlet />}
      </main>
      <Toaster />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Structure;
