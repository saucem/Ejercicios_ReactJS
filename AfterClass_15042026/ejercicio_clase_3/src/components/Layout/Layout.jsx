import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

export function Layout({children}) {
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