'use client'

export function PartnersMarquee({ title, subtitle }: { title: string; subtitle: string }) {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-[#ffe8d6]/40 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{title}</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mb-6" />
        <p className="text-lg text-black/60 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="overflow-hidden bg-white/60 backdrop-blur-sm rounded-2xl mx-4 md:mx-8 p-6 border border-black/5 shadow-inner">
        <div className="flex w-max animate-partners-scroll gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex-shrink-0 w-28 h-28 flex items-center justify-center">
              <img
                src={`/partenaires/${logo}.png`}
                alt=""
                className="max-h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
