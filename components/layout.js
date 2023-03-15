import Header from "components/header";
import Footer from "components/footer";

export default function Layout({ children }) {
  return (
    <>
      <div class="flex flex-col min-h-screen">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}
