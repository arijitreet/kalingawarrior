import { motion } from 'framer-motion';

const TeamBanner = () => {
  return (
    <section id="team-banner" className="relative h-72 overflow-hidden sm:h-96">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509474520651-68a8112d8d77?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
        initial={{ y: 0 }}
        whileInView={{ y: -30 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeOut', duration: 1.7 }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="text-4xl font-black tracking-widest text-white drop-shadow-lg sm:text-6xl">
          KALINGA WARRIORS
        </h2>
      </div>
    </section>
  );
};

export default TeamBanner;
