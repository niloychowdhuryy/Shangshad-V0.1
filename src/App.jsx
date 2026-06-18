import { Suspense, lazy, useState } from 'react';
import { useAuth } from './hooks/useAuth.js';
import AuthGate from './components/AuthGate.jsx';
import HomeScreen from './components/HomeScreen.jsx';

// GameScreen pulls in the ~2MB card decks; load it (and them) only when a game
// actually starts, so the menu, leaderboard, and how-to-play appear instantly.
const GameScreen = lazy(() => import('./screens/GameScreen.jsx'));

function GameLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-ink text-parchment">
      <div className="h-10 w-10 rounded-full border-2 border-line border-t-accent animate-spin" aria-hidden="true" />
      <p className="font-tech tracking-widest text-sm text-parchment/70">CONVENING THE SANGSAD…</p>
    </div>
  );
}

export default function App() {
  const { user, loading } = useAuth();
  // route: { screen: 'menu' } | { screen: 'game', mode: 'new' | 'continue' }
  const [route, setRoute] = useState({ screen: 'menu' });

  return (
    <AuthGate user={user} loading={loading}>
      {user &&
        (route.screen === 'menu' ? (
          <HomeScreen
            user={user}
            onPlay={(start, gameMode) => setRoute({ screen: 'game', mode: start, gameMode })}
          />
        ) : (
          <Suspense fallback={<GameLoading />}>
            <GameScreen
              key={route.mode + (route.gameMode || '') + (route.nonce || '')}
              user={user}
              startMode={route.mode}
              gameMode={route.gameMode}
              onExit={() => setRoute({ screen: 'menu' })}
            />
          </Suspense>
        ))}
    </AuthGate>
  );
}
