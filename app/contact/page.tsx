export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0b1026] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <a href="/" className="text-sm opacity-80 hover:opacity-100">
          ← Anasayfa
        </a>

        <h1 className="mt-6 text-4xl font-bold">İletişim</h1>
        <p className="mt-3 opacity-85">
          Demo, iş birliği ve kurumsal görüşmeler için bize ulaşabilirsiniz.
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <p>
            <span className="opacity-70">Genel:</span>{" "}
            <a className="underline" href="mailto:info@levondor.com">
              info@levondor.com
            </a>
          </p>
          <p>
            <span className="opacity-70">Ömer Çolak:</span>{" "}
            <a className="underline" href="mailto:omercol@levondor.com">
              omercol@levondor.com
            </a>
          </p>
          <p>
            <span className="opacity-70">Mehmet Torun:</span>{" "}
            <a className="underline" href="mailto:mehmettorun@levondor.com">
              mehmettorun@levondor.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}