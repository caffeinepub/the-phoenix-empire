import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, Package, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}
interface OrderForm {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

const emptyForm: OrderForm = {
  name: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

export default function CheckoutModal({ open, onClose }: Props) {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState<OrderForm>(emptyForm);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TPE${Date.now().toString().slice(-6)}`;
    setOrderId(id);
    setSuccess(true);
    clearCart();
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setForm(emptyForm);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl bg-[#0d0d0d] border border-[#222] text-white p-0 max-h-[90vh] overflow-y-auto"
        data-ocid="checkout.dialog"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222] sticky top-0 bg-[#0d0d0d] z-10">
          <h2 className="font-bebas text-2xl tracking-widest text-white">
            CHECKOUT
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
            data-ocid="checkout.close_button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 px-6 gap-6"
              data-ocid="checkout.success_state"
            >
              <div className="rounded-full bg-green-900/30 p-6">
                <CheckCircle2 className="h-16 w-16 text-green-400" />
              </div>
              <div className="text-center">
                <h3 className="font-bebas text-3xl tracking-widest text-white mb-2">
                  ORDER PLACED!
                </h3>
                <p className="text-gray-400 font-inter text-sm mb-4">
                  Your order has been confirmed
                </p>
                <div className="bg-[#111] border border-[#222] rounded px-6 py-3 inline-block">
                  <span className="text-gray-400 font-inter text-xs">
                    Order ID:{" "}
                  </span>
                  <span className="text-brand-gold font-bebas tracking-wider text-lg">
                    {orderId}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-inter text-sm">
                <Package className="h-4 w-4" />
                <span>Cash on Delivery &mdash; Pay when delivered</span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="bg-brand-red hover:opacity-90 text-white font-bebas text-lg tracking-widest px-8 py-3 rounded transition-opacity"
                data-ocid="checkout.confirm_button"
              >
                CONTINUE SHOPPING
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-0"
            >
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <h3 className="font-bebas text-xl tracking-wider text-brand-gold mb-4">
                  DELIVERY DETAILS
                </h3>
                <div>
                  <label
                    htmlFor="co-name"
                    className="block font-inter text-xs text-gray-400 mb-1 uppercase tracking-wider"
                  >
                    Full Name *
                  </label>
                  <input
                    id="co-name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="w-full bg-[#111] border border-[#333] focus:border-brand-red text-white font-inter text-sm px-3 py-2 rounded outline-none transition-colors"
                    data-ocid="checkout.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="co-phone"
                    className="block font-inter text-xs text-gray-400 mb-1 uppercase tracking-wider"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="co-phone"
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="10-digit mobile number"
                    className="w-full bg-[#111] border border-[#333] focus:border-brand-red text-white font-inter text-sm px-3 py-2 rounded outline-none transition-colors"
                    data-ocid="checkout.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="co-address"
                    className="block font-inter text-xs text-gray-400 mb-1 uppercase tracking-wider"
                  >
                    Delivery Address *
                  </label>
                  <textarea
                    id="co-address"
                    required
                    rows={3}
                    value={form.address}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, address: e.target.value }))
                    }
                    placeholder="House no., Street, Area"
                    className="w-full bg-[#111] border border-[#333] focus:border-brand-red text-white font-inter text-sm px-3 py-2 rounded outline-none transition-colors resize-none"
                    data-ocid="checkout.textarea"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="co-city"
                      className="block font-inter text-xs text-gray-400 mb-1 uppercase tracking-wider"
                    >
                      City *
                    </label>
                    <input
                      id="co-city"
                      required
                      value={form.city}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, city: e.target.value }))
                      }
                      placeholder="City"
                      className="w-full bg-[#111] border border-[#333] focus:border-brand-red text-white font-inter text-sm px-3 py-2 rounded outline-none transition-colors"
                      data-ocid="checkout.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="co-pincode"
                      className="block font-inter text-xs text-gray-400 mb-1 uppercase tracking-wider"
                    >
                      Pincode *
                    </label>
                    <input
                      id="co-pincode"
                      required
                      pattern="[0-9]{6}"
                      value={form.pincode}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, pincode: e.target.value }))
                      }
                      placeholder="6-digit pincode"
                      className="w-full bg-[#111] border border-[#333] focus:border-brand-red text-white font-inter text-sm px-3 py-2 rounded outline-none transition-colors"
                      data-ocid="checkout.input"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:opacity-90 text-white font-bebas text-lg tracking-widest py-3 rounded transition-opacity mt-2"
                  data-ocid="checkout.submit_button"
                >
                  PLACE ORDER &mdash; CASH ON DELIVERY
                </button>
              </form>

              <div className="p-6 bg-[#111] border-l border-[#222]">
                <h3 className="font-bebas text-xl tracking-wider text-brand-gold mb-4">
                  ORDER SUMMARY
                </h3>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm text-white truncate">
                          {item.product.name}
                        </p>
                        <p className="font-inter text-xs text-gray-400">
                          x{item.quantity}
                        </p>
                      </div>
                      <span className="font-inter text-sm text-white font-medium">
                        &#8377;
                        {(item.product.price * item.quantity).toLocaleString(
                          "en-IN",
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#222] pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter text-sm text-gray-400">
                      Subtotal
                    </span>
                    <span className="font-inter text-sm text-white">
                      &#8377;{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter text-sm text-gray-400">
                      Shipping
                    </span>
                    <span className="font-inter text-sm text-green-400">
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#222] pt-3 mt-3">
                    <span className="font-bebas text-lg tracking-wider text-white">
                      TOTAL
                    </span>
                    <span className="font-bebas text-2xl text-brand-gold tracking-wider">
                      &#8377;{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <div className="mt-4 bg-black/50 border border-[#333] rounded p-3">
                  <p className="font-inter text-xs text-gray-400 text-center">
                    &#128176; Cash on Delivery &mdash; Pay when you receive your
                    order
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
