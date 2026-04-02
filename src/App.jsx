import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-fuchsia-900 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top_left,_rgba(105,230,255,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(249,168,212,0.2),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-20 h-5 w-5 animate-pulse rounded-full bg-white/30"></span>
        <span className="absolute left-40 top-64 h-4 w-4 animate-pulse rounded-full bg-white/30"></span>
        <span className="absolute right-20 top-36 h-6 w-6 animate-pulse rounded-full bg-white/30"></span>
        <span className="absolute right-12 bottom-24 h-4 w-4 animate-pulse rounded-full bg-white/30"></span>
        <span className="absolute left-24 bottom-40 h-3 w-3 animate-pulse rounded-full bg-white/30"></span>
        <span className="absolute left-1/2 top-56 h-8 w-8" style={{ fontSize: '1.7rem' }}>🏏</span>
        <span className="absolute right-32 top-16 h-8 w-8" style={{ fontSize: '1.7rem' }}>🥎</span>
        <span className="absolute right-10 bottom-40 h-8 w-8" style={{ fontSize: '1.7rem' }}>✋</span>
      </div>

      <div className="relative z-10">
        <Home />
        <footer className="border-t border-gray-800 bg-black/70 py-7 text-center text-sm text-gray-300">
          <p>© 2026 Kalinga Warriors - All rights reserved.</p>
          <p>
            Built with React + Vite + Tailwind + Framer Motion by{' '}
            <a href="https://www.linkedin.com/in/arijitpanda977/" target="_blank" rel="noopener noreferrer" className="font-bold text-gold hover:text-red-400 transition">
              ARIJIT PANDA
            </a>
          </p>
        </footer>
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;
