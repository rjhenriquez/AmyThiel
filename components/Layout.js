import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="App">
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
