export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1026]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-wide">
          LEVONDOR
        </a>

        <nav className="flex items-center gap-6 text-sm opacity-90">
          <a href="/wellbalance" className="hover:opacity-100 hover:underline">
            WellBalance
          </a>
          <a href="/solutions" className="hover:opacity-100 hover:underline">
            Çözüm Alanları
          </a>
          <a href="/about" className="hover:opacity-100 hover:underline">
            Hakkımızda
          </a>
          <a href="/contact" className="hover:opacity-100 hover:underline">
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}