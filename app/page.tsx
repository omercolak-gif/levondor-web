export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1026] text-white">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">LEVONDOR</h1>

        <p className="mt-6 text-xl opacity-90">
          Longevity Enhancement & Vitality Optimization
        </p>

        <p className="mt-3 text-base opacity-80">
          Sağlıklı ve Uzun Yaşam için Akıllı Teknolojiler
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/wellbalance"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black"
          >
            WellBalance’i Keşfet
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-white/30 px-6 py-3"
          >
            İletişime Geç
          </a>
        </div>
      </section>

      <section className="bg-white/5 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            ["WellBalance", "Takviye Takip ve Akıllı Öneri Platformu"],
            ["Longevity", "Sağlıklı Yaşam Teknolojileri"],
            ["Sport", "Performans ve İyileşme Çözümleri"],
            ["Beauty", "Estetik ve Kozmetik Teknolojiler"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm opacity-80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} LEVONDOR · info@levondor.com
      </footer>
    </main>
  );
}