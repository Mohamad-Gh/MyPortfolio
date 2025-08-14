import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <ScrollToTopButton />
      <main className="min-h-screen p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
