import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Shield, Star, Trophy, Zap } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Arjun Sharma",
    location: "Mumbai",
    stars: 5,
    quote:
      "The Phoenix Strike Boots completely changed my game. Incredible grip, incredible power. Worth every rupee!",
  },
  {
    name: "Rohan Verma",
    location: "Delhi",
    stars: 5,
    quote:
      "Ordered the match ball and it arrived the next day. Quality is outstanding — feels like a professional ball at a student price.",
  },
  {
    name: "Priya Nair",
    location: "Bangalore",
    stars: 5,
    quote:
      "The jersey fits perfectly and the fabric is top quality. My whole team now wears Phoenix Empire. Love the brand!",
  },
];

const instaPhotos = [
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    id: "ig1",
  },
  {
    url: "https://images.unsplash.com/photo-1551958219-acbc630e2914?w=400&h=400&fit=crop",
    id: "ig2",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    id: "ig3",
  },
  {
    url: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=400&fit=crop",
    id: "ig4",
  },
  {
    url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=400&fit=crop",
    id: "ig5",
  },
  {
    url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=400&fit=crop",
    id: "ig6",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-stadium.dim_1600x900.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/generated/phoenix-logo-transparent.dim_400x400.png"
              alt="Phoenix Empire Logo"
              className="h-24 w-24 mx-auto mb-6 drop-shadow-2xl"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-widest text-white leading-none"
          >
            THE PHOENIX
            <br />
            <span className="text-brand-red">EMPIRE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-bebas text-2xl sm:text-3xl text-brand-gold tracking-widest mt-4"
          >
            RISE WITH THE GAME
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-brand-red hover:opacity-90 text-white font-bebas text-xl tracking-widest px-10 py-4 rounded transition-opacity"
              data-ocid="home.primary_button"
            >
              SHOP NOW <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-bebas text-xl tracking-widest px-10 py-4 rounded transition-colors"
              data-ocid="home.secondary_button"
            >
              EXPLORE GEAR
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="py-20 px-4 max-w-7xl mx-auto"
        data-ocid="home.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-bebas text-brand-gold text-sm tracking-widest">
            HANDPICKED FOR YOU
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-widest text-white mt-1">
            FEATURED <span className="text-brand-red">GEAR</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} index={idx + 1} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bebas text-lg tracking-widest px-8 py-3 rounded transition-colors"
            data-ocid="home.button"
          >
            VIEW ALL PRODUCTS <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="py-20 bg-[#0a0a0a] border-y border-[#1a1a1a]"
        data-ocid="home.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-bebas text-brand-gold text-sm tracking-widest">
              THE PHOENIX ADVANTAGE
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-widest text-white mt-1">
              WHY CHOOSE <span className="text-brand-red">US</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Gear",
                desc: "Every product meets professional standards. We source only the best materials for maximum durability and performance.",
              },
              {
                icon: Trophy,
                title: "Affordable Prices",
                desc: "Premium football gear shouldn't break the bank. We deliver world-class quality at prices that work for every player.",
              },
              {
                icon: Zap,
                title: "Performance Built",
                desc: "Engineered for serious players. Our gear is designed to elevate your game and help you dominate every match.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#111] border border-[#222] group-hover:border-brand-red transition-colors mb-5">
                  <item.icon className="h-7 w-7 text-brand-gold" />
                </div>
                <h3 className="font-bebas text-2xl tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-20 px-4 max-w-7xl mx-auto"
        data-ocid="home.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-bebas text-brand-gold text-sm tracking-widest">
            WHAT THE FANS SAY
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-widest text-white mt-1">
            THE <span className="text-brand-red">REVIEWS</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111] border border-[#222] rounded p-6 flex flex-col gap-3"
              data-ocid="home.card"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }, (_, j) => `star-${j}`).map(
                  (key) => (
                    <Star
                      key={key}
                      className="h-4 w-4 fill-brand-gold text-brand-gold"
                    />
                  ),
                )}
              </div>
              <p className="font-inter text-sm text-gray-300 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-auto pt-3 border-t border-[#222]">
                <p className="font-bebas tracking-wider text-white">{t.name}</p>
                <p className="font-inter text-xs text-gray-600">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section
        className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a]"
        data-ocid="home.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-widest text-white">
              @THEPHOENIXEMPIRE
            </h2>
            <p className="font-inter text-sm text-gray-500 mt-2">
              Follow us for daily football content and drops
            </p>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instaPhotos.map((photo, idx) => (
              <motion.a
                key={photo.id}
                href="https://instagram.com/thephoenixempire"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="aspect-square overflow-hidden rounded group relative"
                data-ocid={`home.item.${idx + 1}`}
              >
                <img
                  src={photo.url}
                  alt={`Instagram post ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/20 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/thephoenixempire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-bebas text-lg tracking-widest px-8 py-3 rounded transition-colors"
              data-ocid="home.button"
            >
              FOLLOW ON INSTAGRAM
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
