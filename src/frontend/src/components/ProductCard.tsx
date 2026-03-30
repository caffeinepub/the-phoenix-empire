import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 1 }: Props) {
  const { addToCart } = useCart();

  return (
    <div
      className="group bg-[#111] border border-[#222] hover:border-brand-red transition-all duration-300 rounded overflow-hidden flex flex-col"
      data-ocid={`shop.item.${index}`}
    >
      <div className="relative overflow-hidden aspect-square bg-[#0a0a0a]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="font-bebas text-xs tracking-widest text-brand-gold mb-1">
          {product.category}
        </span>
        <h3 className="font-bebas text-lg tracking-wide text-white leading-tight mb-1">
          {product.name}
        </h3>
        <p className="font-inter text-xs text-gray-500 leading-relaxed mb-3 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bebas text-2xl text-brand-red tracking-wider">
            &#8377;{product.price.toLocaleString("en-IN")}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 bg-brand-red hover:opacity-90 text-white font-inter text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded transition-opacity"
            data-ocid={`shop.button.${index}`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
