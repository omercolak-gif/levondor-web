
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WellBalance",
  description:
    "WellBalance, takviye takip ve akıllı öneri platformudur. Geliştirme aşamasındadır.",
  alternates: {
    canonical: "https://levondor.com/wellbalance",
  },
};export default function WellBalance() {
  return (
    <main className="min-h-screen bg-[#0b1026] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <a href="/" className="text-sm opacity-80 hover:opacity-100">
          ← Anasayfa
        </a>

        <h1 className="mt-6 text-4xl font-bold">Levondor WellBalance</h1>
        <p className="mt-3 text-lg opacity-90">
          Takviye Takip ve Akıllı Öneri Platformu
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ["Görünürlük", "Kullandığın takviyeleri tek ekranda takip et."],
            ["Uyumluluk", "Rutin ve hedeflere göre kullanımını düzenle."],
            ["Uyarılar", "Bilgilendirici hatırlatma ve risk sinyalleri."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white/10 p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm opacity-80">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 text-sm opacity-85">
          Not: WellBalance tanı veya tedavi amaçlı değildir. Geliştirme aşamasındadır.
        </div>

        <a
          href="/contact"
          className="inline-block mt-10 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black"
        >
          Demo / İş birliği için iletişim
        </a>
      </div>
    </main>
  );
}