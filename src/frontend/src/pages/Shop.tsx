import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { Category } from "@/data/products";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const categories: ("All" | Category)[] = [
  "All",
  "Footballs",
  "Boots",
  "Jerseys",
  "Accessories",
];

function getCategoryFromURL(): "All" | Category {
  if (typeof window === "undefined") return "All";
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category") as Category | null;
  if (cat && (categories as string[]).includes(cat)) return cat;
  return "All";
}

export default function Shop() {
  const [active, setActive] = useState<"All" | Category>(getCategoryFromURL);

  useEffect(() => {
    const cat = getCategoryFromURL();
    setActive(cat);
  }, []);

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-[#0a0a0a] border-b border-[#1a1a1a] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bebas text-brand-gold text-sm tracking-widest">
            DISCOVER YOUR EDGE
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl tracking-widest text-white mt-1">
            THE <span className="text-brand-red">SHOP</span>
          </h1>
          <p className="font-inter text-sm text-gray-500 mt-3 max-w-md mx-auto">
            Premium football gear. Zero compromise. Delivered pan India.
          </p>
        </motion.div>
      </section>

      <section className="sticky top-16 z-40 bg-black border-b border-[#1a1a1a] px-4">
        <div className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-bebas text-sm tracking-widest px-5 py-4 border-b-2 transition-all whitespace-nowrap ${
                active === cat
                  ? "border-brand-red text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
              data-ocid="shop.tab"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="font-inter text-sm text-gray-500">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-24" data-ocid="shop.empty_state">
            <p className="font-bebas text-3xl tracking-wider text-gray-600">
              NO PRODUCTS FOUND
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <ProductCard product={product} index={idx + 1} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
