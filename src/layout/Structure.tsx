import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

function Structure({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-header text-heading shadow-md">
        <Header />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow bg-background text-mainHeading">
        <div className=" mx-auto w-full h-full">{children || <Outlet />}</div>
      </main>

      {/* Toaster Notifications */}
      <Toaster toastOptions={{ duration: 3000 }} />

      {/* Footer */}
      <footer className="bg-footer text-footerHeading">
        <Footer />
      </footer>
    </div>
  );
}

export default Structure;
