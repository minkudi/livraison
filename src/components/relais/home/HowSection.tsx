import type { Dictionary } from "@/i18n/types";

export function HowSection({ dict }: { dict: Dictionary }) {
  const h = dict.how;

    return (
    <section className="scroll-mt-28 relative bg-white py-24" id="reseau">
      {/* Soft decorative gradient */}
      <div className="absolute left-1/2 top-1/2 h-full w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-navy/3 via-transparent to-transparent" aria-hidden />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <p className="inline-block rounded-full bg-navy/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-navy">{h.tag}</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading">
            {h.title}
          </h2>
        </div>
                <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((step, index) => (
            <li 
              key={step.title} 
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(11,26,51,0.06)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(11,26,51,0.12)] hover:-translate-y-2"
            >
              {/* Gradient background section */}
              <div className="relative flex h-44 items-end overflow-hidden bg-gradient-to-br from-navy via-navy-2 to-navy-3 p-6">
                {/* Soft grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-40" aria-hidden />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" aria-hidden />
                
                <span className="relative z-10 text-5xl font-bold text-gold-lt transition-transform duration-500 group-hover:scale-110">{index + 1}</span>
                
                {/* Decorative circle */}
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:scale-150" aria-hidden />
              </div>
              
              <div className="relative p-6">
                <h3 className="text-lg font-semibold text-heading">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-denim">{step.text}</p>
                
                {/* Soft accent line */}
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-20" aria-hidden />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
