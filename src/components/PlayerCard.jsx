import { motion } from 'framer-motion';

const PlayerCard = ({ player }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-gray-800 bg-black/65 shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={player.image}
          alt={player.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/60 p-3">
          <p className="text-sm text-gray-200">#{player.number} • {player.role}</p>
          <h3 className="text-lg font-bold text-white">{player.name}</h3>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileHover={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden px-4 pb-4 text-sm text-gray-300"
      >
        <p>Runs: <span className="font-semibold text-gold">{player.runs}</span></p>
        <p>Wickets: <span className="font-semibold text-green-400">{player.wickets}</span></p>
        <p>Role: <span className="text-white">{player.role}</span></p>
      </motion.div>
    </motion.article>
  );
};

export default PlayerCard;
