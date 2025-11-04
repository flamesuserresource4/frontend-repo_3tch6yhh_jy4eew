export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E8DCC1] to-[#9CAF88] shadow-inner" />
            <div>
              <p className="font-semibold text-emerald-950">Sage & Sand Creative</p>
              <p className="text-sm text-emerald-900/60">Agensi kreatif digital berfokus 3D</p>
            </div>
          </div>
          <div className="text-sm text-emerald-900/70 text-center md:text-right">
            <p>© {new Date().getFullYear()} Sage & Sand Creative. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
