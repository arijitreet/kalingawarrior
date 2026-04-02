import players from '../data/players.json';
import PlayerCard from './PlayerCard';
import { motion } from 'framer-motion';

const PlayersSection = () => (
  <section id="players" className="px-6 py-16 sm:px-12">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Players</h2>
        <p className="mt-2 text-gray-300">Meet the warriors who make every match phenomenal.</p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <PlayerCard key={`${player.name}-${player.number}`} player={player} />
        ))}
      </div>
    </div>
  </section>
);

export default PlayersSection;
