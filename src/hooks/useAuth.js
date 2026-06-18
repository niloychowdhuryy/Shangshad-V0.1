import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '../firebase/auth.js';

/** Subscribes to auth state. Returns { user, loading }. */
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  return { user, loading };
}
