import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

function Layout({children}) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout