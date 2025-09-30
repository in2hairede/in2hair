import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-drk-gray text-white z-50 transition-transform duration-300 ${!visible
        ? "-translate-y-full"
        : "translate-y-0"}`}
    >
      <div className="sm:container mx-auto flex justify-between items-center text-3xl p-4">
        <a href="#knipen" className="flex items-center gap-2">
          <img src="/in2hiar.png" alt="logo" className="h-8" />
          <h2 className="text-white font-bold ">
            <span className="text-green-600">Kapsalon</span> Ede
          </h2>
        </a>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white focus:outline-none rounded-full"
        >
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-gray-700 text-white p-4 space-y-4 text-right">
          {[
            ["#knipen", "Knipen"],
            ["#kleuren", "Kleuren"],
            ["#keratine", "Keratine"],
            ["#product", "Product"],
            ["#prijslist", "Prijslist"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
