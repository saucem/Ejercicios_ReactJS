import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export function Layout({children}) {
  return (
    <>
      <Header />
      <main style={
          {
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }
        }>
        {children}
      </main>
      <Footer />
    </>
  )
}