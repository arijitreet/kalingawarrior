import { motion } from 'framer-motion';
import statsData from '../data/stats.json';

const StatCard = ({ title, value }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 24 }}
    viewport={{ once: true, amount: 0.2 }}
    className="flex h-32 w-full flex-col items-center justify-center rounded-2xl border border-gray-800 bg-black/70 p-4 shadow-glowGold"
  >
    <p className="text-sm uppercase tracking-widest text-gray-300">{title}</p>
    <p className="mt-2 text-3xl font-bold text-gold">{value}</p>
  </motion.div>
);

const Stats = () => {
  const matches = statsData.matches ?? 0;
  const won = statsData.won ?? 0;
  const lost = statsData.lost ?? 0;
  const winPercent = matches > 0 ? ((won / matches) * 100).toFixed(1) : '0.0';

  return (
    <section id="about" className="scroll-mt-20 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Kalinga Warriors</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            From starting on a small turf to competing in some of the top tournaments in Bangalore, our journey has been truly remarkable , a story of growth, resilience, and continuous improvement.
Kalinga Warriors is more than just a cricket team , it’s a unit built on passion, discipline, and strong team spirit. With consistent performances and a winning mindset, the team has established itself as a tough competitor across various tournaments. Every match we play reflects our dedication, strategy, and hunger to grow stronger.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Matches Played" value={matches} />
          <StatCard title="Wins" value={won} />
          <StatCard title="Losses" value={lost} />
          <StatCard title="Win %" value={`${winPercent}%`} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
