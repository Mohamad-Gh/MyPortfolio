import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
