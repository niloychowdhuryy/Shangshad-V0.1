import { Component } from 'react';

// Catches any render error so the app shows a recovery screen instead of a blank
// page. The "Reset game data" button clears local saves and reloads — the safe
// escape hatch if a corrupt save ever wedges the UI.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('[shangshad] render error:', error, info);
  }

  resetData = () => {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith('regime:') || k.startsWith('shangshad:'))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      /* ignore */
    }
    location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="grid min-h-screen place-items-center p-6 font-tech">
        <div className="panel w-full max-w-sm p-6 text-center">
          <h1 className="mb-2 font-tech text-xl font-bold tracking-wide text-bdred">Something broke</h1>
          <p className="mb-4 font-serif text-sm text-parchment/75">
            The console hit an unexpected error. Your progress is saved; reloading usually fixes it.
            If it keeps happening, reset your local data.
          </p>
          <p className="mb-4 break-words rounded border border-line/50 bg-black/30 p-2 font-mono text-[10px] text-parchment/50">
            {String(this.state.error?.message || this.state.error)}
          </p>
          <div className="flex flex-col gap-2">
            <button className="btn-primary" onClick={() => location.reload()}>Reload</button>
            <button className="btn-ghost text-xs" onClick={this.resetData}>Reset game data</button>
          </div>
        </div>
      </div>
    );
  }
}
