import { motion } from 'framer-motion';
import tournaments from '../data/tournaments.json';

const AchievementCard = ({ name, position }) => {
  const isWinner = position.toLowerCase() === 'winner';
  const proClass = isWinner ? 'shadow-glowGold border-gold/50 bg-yellow-950/50' : 'shadow-glowSilver border-slate-400/40 bg-slate-900/50';

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      viewport={{ once: true, amount: 0.25 }}
      className={`rounded-2xl border p-5 ${proClass} transition hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="flex items-center gap-3">
        <div className={`h-3 w-3 rounded-full ${isWinner ? 'bg-gold' : 'bg-slate-300'}`} />
        <p className="text-xs uppercase tracking-wider text-gray-200">{position}</p>
      </div>
      <h3 className="mt-3 text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm text-gray-200">A key team milestone with outstanding performance and dedication.</p>
      <p className="mt-2 text-sm text-gray-200">First Tournament win of Kalinga Warriors</p>
      
    </motion.div>
  );
};

const Achievements = () => (
  <section id="achievements" className="px-6 py-16 sm:px-12">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Achievements</h2>
      <p className="mt-2 text-gray-300">Showcasing tournament achievements with gold-grade effort and consistency.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tournaments.map((t, idx) => (
          <AchievementCard key={`${t.name}-${idx}`} name={t.name} position={t.position} />
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
