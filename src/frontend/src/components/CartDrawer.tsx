import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0d0d0d] z-50 flex flex-col border-l border-[#222]"
            data-ocid="cart.panel"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-brand-gold" />
                <h2 className="font-bebas text-xl tracking-wider text-white">
                  YOUR CART
                </h2>
                {totalItems > 0 && (
                  <span className="bg-brand-red text-white text-xs rounded-full px-2 py-0.5 font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                data-ocid="cart.close_button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full gap-4"
                  data-ocid="cart.empty_state"
                >
                  <ShoppingBag className="h-16 w-16 text-gray-600" />
                  <p className="text-gray-500 font-inter">Your cart is empty</p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="text-brand-gold font-inter text-sm underline"
                    data-ocid="cart.button"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item, idx) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 bg-[#111] border border-[#222] rounded p-3"
                      data-ocid={`cart.item.${idx + 1}`}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-inter font-semibold text-white text-sm truncate">
                          {item.product.name}
                        </p>
                        <p className="text-brand-gold text-sm font-bebas tracking-wider mt-0.5">
                          &#8377;{item.product.price.toLocaleString("en-IN")}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 border border-[#333] rounded hover:border-brand-red transition-colors text-white"
                            data-ocid={`cart.toggle.${idx + 1}`}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-white font-inter text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 border border-[#333] rounded hover:border-brand-red transition-colors text-white"
                            data-ocid={`cart.toggle.${idx + 1}`}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-600 hover:text-brand-red transition-colors self-start"
                        data-ocid={`cart.delete_button.${idx + 1}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-4 border-t border-[#222] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-gray-400">Subtotal</span>
                  <span className="font-bebas text-xl text-white tracking-wider">
                    &#8377;{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    setCheckoutOpen(true);
                  }}
                  className="w-full bg-brand-red hover:opacity-90 text-white font-bebas text-lg tracking-widest py-3 rounded transition-opacity"
                  data-ocid="cart.primary_button"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}
