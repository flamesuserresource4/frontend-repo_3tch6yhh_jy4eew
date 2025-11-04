import { useState, useEffect } from 'react';

const LINKS = [
  { label: 'Beranda', hash: '#/' },
  { label: 'Tentang Kami', hash: '#/about' },
  { label: 'Layanan', hash: '#/services' },
  { label: 'Kontak', hash: '#/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#/');

  useEffect(() => {
    const update = () => setActive(window.location.hash || '#/');
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8DCC1] to-[#9CAF88] shadow-inner" />
            <span className="font-semibold tracking-tight text-emerald-950">Sage & Sand Creative</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l.hash}
                href={l.hash}
                className={`text-sm font-medium transition-colors hover:text-emerald-800 ${
                  active === l.hash ? 'text-emerald-900' : 'text-emerald-900/70'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-emerald-900/10 text-emerald-900"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-900/10 bg-white">
          <div className="px-4 py-3 space-y-2">
            {LINKS.map((l) => (
              <a
                key={l.hash}
                href={l.hash}
                onClick={() => setOpen(false)}
                className={`block px-2 py-2 rounded-md ${
                  active === l.hash ? 'bg-emerald-50 text-emerald-900' : 'text-emerald-900/80'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
