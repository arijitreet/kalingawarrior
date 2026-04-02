import tournaments from '../data/tournaments.json';

const TournamentTable = () => (
  <section id="tournaments" className="px-6 py-16 sm:px-12">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Tournament Results</h2>
      <p className="mt-2 text-gray-300">Performance snapshot for the last season.</p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-800 bg-black/60">
        <table className="min-w-full text-left text-sm text-gray-200">
          <thead className="bg-gray-900/80 text-xs uppercase tracking-wider text-gray-400">
            <tr>
              <th className="px-4 py-3">Tournament</th>
              <th className="px-4 py-3">Played</th>
              <th className="px-4 py-3">Wins</th>
              <th className="px-4 py-3">Losses</th>
              <th className="px-4 py-3">Position</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((t, idx) => {
              const isWinner = t.position.toLowerCase() === 'winner';
              return (
                <tr key={`${t.name}-${idx}`} className={`border-t border-gray-800 ${isWinner ? 'bg-gold/10' : 'bg-white/5'}`}>
                  <td className="px-4 py-3 font-semibold text-white">{t.name}</td>
                  <td className="px-4 py-3">{t.played}</td>
                  <td className="px-4 py-3">{t.won}</td>
                  <td className="px-4 py-3">{t.lost}</td>
                  <td className="px-4 py-3">{t.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default TournamentTable;
