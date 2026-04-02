import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-purple-700 to-fuchsia-700">
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.2),transparent_35%),linear-gradient(140deg,#060b1a_0%,#141c2d_60%,#3b2356_100%)]" />
      <div className="pointer-events-none absolute -right-16 top-12 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl mix-blend-screen" />
      <div className="pointer-events-none absolute left-0 top-48 h-80 w-80 rounded-full bg-amber-400/25 blur-3xl mix-blend-screen" />
      <div className="pointer-events-none absolute bottom-16 right-12 h-60 w-60 rounded-full bg-violet-400/25 blur-3xl mix-blend-screen" />
      <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2">
        <img src="/players/Kalinga%20warriors%20logo.png" alt="Kalinga Warriors Logo" className="h-20 w-auto rounded-full border-2 border-gold bg-white p-1 shadow-xl" />
      </div>
      <div className="relative z-10 max-w-5xl p-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-extrabold text-gold sm:text-7xl">
          Kalinga Warriors
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-6 text-xl text-gray-100 sm:text-2xl">
          Built on Passion & Power
        </motion.p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-lg border border-gold px-7 py-3 text-sm font-semibold text-gold transition hover:-translate-y-0.5 hover:bg-gold/20"
          >
            Know more about Kalinga Warriors
          </motion.a>

          <motion.a
            href="#players"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="rounded-lg border border-gold px-5 py-2 text-xs font-semibold text-gold uppercase tracking-wider transition hover:-translate-y-0.5 hover:bg-gold/20"
          >
            Explore the Squad
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
