import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/phoenix-logo-transparent.dim_400x400.png"
                alt="Phoenix Empire"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bebas text-xl tracking-widest text-white">
                  THE PHOENIX EMPIRE
                </h3>
                <p className="font-inter text-xs text-brand-gold tracking-widest">
                  RISE WITH THE GAME
                </p>
              </div>
            </div>
            <p className="font-inter text-sm text-gray-500 max-w-xs leading-relaxed">
              Premium football accessories for every player who refuses to
              settle. Born from passion, built for dominance.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Phoenix%20Empire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#111] border border-[#333] hover:border-green-500 text-gray-300 hover:text-green-400 font-inter text-sm px-3 py-2 rounded transition-colors"
                data-ocid="footer.button"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="https://instagram.com/thephoenixempire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#111] border border-[#333] hover:border-pink-500 text-gray-300 hover:text-pink-400 font-inter text-sm px-3 py-2 rounded transition-colors"
                data-ocid="footer.button"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-wider text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/shop" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-gray-500 hover:text-brand-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-wider text-white mb-4">
              SHOP
            </h4>
            <ul className="space-y-2">
              {["Footballs", "Boots", "Jerseys", "Accessories"].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/shop"
                    search={{ category: cat }}
                    className="font-inter text-sm text-gray-500 hover:text-brand-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-gray-600">
            &copy; {year} The Phoenix Empire. All rights reserved.
          </p>
          <p className="font-inter text-xs text-gray-600">
            Built with &hearts; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
