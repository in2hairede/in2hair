import Navbar from "./components/navbar";
import Knipen from "./components/knipen";
import Kleuren from "./components/kleuren";
import Keratine from "./components/keratine";
import Product from "./components/product";
import Prijslist from "./components/prijslist";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <main className="py-16 bg-gray-400">
      <Navbar />
      <Knipen />
      <Kleuren />
      <Keratine />
      <Product />
      <Prijslist />
      <Contact />
      <Footer />
    </main>
  )
}

