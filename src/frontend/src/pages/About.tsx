import { Flame, Globe, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Products" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "Pan India", label: "Delivery" },
  { value: "4.9★", label: "Average Rating" },
];

const values = [
  {
    icon: Flame,
    title: "Born from Passion",
    desc: "The Phoenix Empire was created by football lovers, for football lovers. Every product carries the fire of the game.",
  },
  {
    icon: Target,
    title: "Built for Performance",
    desc: "We engineer gear that helps you perform at your peak — from the street pitch to the main stadium.",
  },
  {
    icon: Users,
    title: "One Community",
    desc: "Football unites. We serve every player who loves the game, from beginners to seasoned professionals.",
  },
  {
    icon: Globe,
    title: "Pan India Reach",
    desc: "No matter where you are in India, The Phoenix Empire delivers world-class football gear to your doorstep.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section
        className="relative py-32 px-4 bg-[#0a0a0a] border-b border-[#1a1a1a] overflow-hidden"
        data-ocid="about.section"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-bebas text-brand-gold text-sm tracking-widest">
              THE STORY BEHIND THE EMPIRE
            </span>
            <h1 className="font-bebas text-6xl sm:text-8xl tracking-widest text-white mt-2">
              OUR <span className="text-brand-red">STORY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="border-l-4 border-brand-red pl-8">
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-white mb-4">
              THE BEGINNING
            </h2>
            <p className="font-inter text-gray-400 leading-relaxed">
              The Phoenix Empire started on a dusty street pitch in India — two
              friends, one football, and a dream bigger than the game itself. We
              saw how hard it was for passionate players to get quality gear
              without spending a fortune. So we built the brand we always wished
              existed.
            </p>
          </div>
          <div className="border-l-4 border-brand-gold pl-8">
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-white mb-4">
              THE MISSION
            </h2>
            <p className="font-inter text-gray-400 leading-relaxed">
              Our mission is simple: make premium football accessories
              accessible to every player in India. Whether you play in a league,
              train with your school team, or hit the streets after dark &#8212;
              you deserve gear that matches your hunger for the game.
            </p>
          </div>
          <div className="border-l-4 border-white/20 pl-8">
            <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-white mb-4">
              THE RISE
            </h2>
            <p className="font-inter text-gray-400 leading-relaxed">
              Like a phoenix rising from the ashes, we've grown from zero to
              serving thousands of players across India. Every match played in
              our gear, every goal scored wearing our boots &#8212; that's the
              fuel that drives us forward. We're not just selling products.
              We're building an empire of players who refuse to settle.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
                data-ocid="about.card"
              >
                <p className="font-bebas text-4xl sm:text-5xl text-brand-red tracking-wider">
                  {stat.value}
                </p>
                <p className="font-inter text-xs text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 max-w-7xl mx-auto"
        data-ocid="about.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-widest text-white">
            WHAT WE <span className="text-brand-gold">STAND FOR</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111] border border-[#222] rounded p-6 text-center group hover:border-brand-gold transition-colors"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-black border border-[#333] group-hover:border-brand-gold transition-colors mb-4">
                <v.icon className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-bebas text-xl tracking-wider text-white mb-3">
                {v.title}
              </h3>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
