import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";

function Layout({children}) {
  return (
    <div>
      <ToastContainer
        transition={Flip}
        position="bottom-right"
      />
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

