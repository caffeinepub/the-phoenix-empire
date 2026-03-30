import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent! We'll get back to you soon.");
  };

  const infoItems = [
    { icon: MapPin, label: "Location", value: "India — Delivering Pan India" },
    { icon: Phone, label: "Phone", value: "+91 99999 99999" },
    { icon: Mail, label: "Email", value: "hello@thephoenixempire.in" },
  ];

  return (
    <main className="min-h-screen">
      <section
        className="py-20 bg-[#0a0a0a] border-b border-[#1a1a1a] text-center"
        data-ocid="contact.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bebas text-brand-gold text-sm tracking-widest">
            WE&#39;RE HERE FOR YOU
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl tracking-widest text-white mt-1">
            GET IN <span className="text-brand-red">TOUCH</span>
          </h1>
          <p className="font-inter text-sm text-gray-500 mt-3 max-w-md mx-auto">
            Have a question? Want to place a bulk order? Or just want to talk
            football? We&#39;re all ears.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-bebas text-2xl tracking-widest text-white mb-6">
                REACH US ON
              </h2>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Phoenix%20Empire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-900/20 border border-green-800/40 hover:border-green-500 text-green-400 font-inter rounded p-4 transition-all group mb-4"
                data-ocid="contact.button"
              >
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bebas text-lg tracking-wider text-white">
                    WHATSAPP US
                  </p>
                  <p className="text-sm text-green-400/70">+91 99999 99999</p>
                </div>
              </a>
              <a
                href="https://instagram.com/thephoenixempire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-pink-900/20 border border-pink-800/40 hover:border-pink-500 text-pink-400 font-inter rounded p-4 transition-all group mb-6"
                data-ocid="contact.button"
              >
                <div className="h-12 w-12 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors flex-shrink-0">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bebas text-lg tracking-wider text-white">
                    FOLLOW ON INSTAGRAM
                  </p>
                  <p className="text-sm text-pink-400/70">@thephoenixempire</p>
                </div>
              </a>
              <div className="space-y-4">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded bg-[#111] border border-[#222] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-gray-600 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-inter text-sm text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#111] border border-[#222] rounded p-6 sm:p-8">
              <h2 className="font-bebas text-2xl tracking-widest text-white mb-6">
                SEND A MESSAGE
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.section"
              >
                <div>
                  <label
                    htmlFor="ct-name"
                    className="block font-inter text-xs text-gray-400 mb-1.5 uppercase tracking-wider"
                  >
                    Your Name *
                  </label>
                  <input
                    id="ct-name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Ronaldo or Messi — we respect both"
                    className="w-full bg-black border border-[#333] focus:border-brand-gold text-white font-inter text-sm px-4 py-3 rounded outline-none transition-colors"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ct-email"
                    className="block font-inter text-xs text-gray-400 mb-1.5 uppercase tracking-wider"
                  >
                    Email Address *
                  </label>
                  <input
                    id="ct-email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full bg-black border border-[#333] focus:border-brand-gold text-white font-inter text-sm px-4 py-3 rounded outline-none transition-colors"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ct-message"
                    className="block font-inter text-xs text-gray-400 mb-1.5 uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="ct-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell us what you need, ask about products, or just say hi!"
                    className="w-full bg-black border border-[#333] focus:border-brand-gold text-white font-inter text-sm px-4 py-3 rounded outline-none transition-colors resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:opacity-90 disabled:opacity-60 text-white font-bebas text-lg tracking-widest py-3 rounded transition-opacity"
                  data-ocid="contact.submit_button"
                >
                  {loading ? (
                    <span className="animate-pulse">SENDING...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
