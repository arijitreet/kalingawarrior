import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Achievements from '../components/Achievements';
import TeamBanner from '../components/TeamBanner';
import PlayersSection from '../components/PlayersSection';
import TournamentTable from '../components/TournamentTable';

const Home = () => (
  <main className="scroll-smooth">
    <Hero />
    <Stats />
    <Achievements />
    <PlayersSection />
    <TournamentTable />
  </main>
);

export default Home;
