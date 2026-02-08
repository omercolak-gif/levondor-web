export default function Solutions() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Çözüm Alanları</h1>
      <p className="mt-3 opacity-85">
        LEVONDOR; sağlıklı yaşam, performans ve estetik ekseninde teknoloji çözümleri geliştirir.
        Ürünlerimiz geliştirme aşamasındadır.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          ["Levondor Longevity", "Sağlıklı yaşam teknolojileri ve kişiselleştirilmiş optimizasyon yaklaşımları."],
          ["Levondor Sport", "Performans, toparlanma ve sürdürülebilir rutin yönetimi için dijital çözümler."],
          ["Levondor Beauty", "Estetik ve kozmetik odaklı teknoloji uygulamaları (B2B/B2C varyantları)."],
          ["Levondor WellBalance", "Takviye takip ve akıllı öneri platformu (ilk ürün)."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl bg-white/10 p-6">
            <h3 className="font-semibold text-lg">{t}</h3>
            <p className="mt-2 text-sm opacity-80">{d}</p>
          </div>
        ))}
      </div>
    </main>
  );
}