import { useCart } from "@/context/CartContext";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-black border-b border-[#1a1a1a]"
      data-ocid="nav.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <img
              src="/assets/generated/phoenix-logo-transparent.dim_400x400.png"
              alt="Phoenix Empire"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bebas text-xl tracking-widest text-white hidden sm:block">
              THE PHOENIX EMPIRE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-inter text-sm font-medium tracking-wider uppercase transition-colors hover:text-brand-gold ${
                  pathname === link.to ? "text-brand-gold" : "text-gray-300"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-white hover:text-brand-gold transition-colors"
              data-ocid="nav.button"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              className="md:hidden p-2 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              data-ocid="nav.button"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a] overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-inter text-sm font-medium tracking-wider uppercase py-2 transition-colors ${
                    pathname === link.to
                      ? "text-brand-gold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
