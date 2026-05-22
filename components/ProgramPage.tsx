import BookTrialButton from "@/components/BookTrialButton";

const BADGE_IMG = "/images/logo.png";

interface Feature {
  title: string;
  body: string;
}

interface PhotoCard {
  img: string;
  caption: string;
  body: string;
  objectPosition?: string;
}

interface ProgramPageProps {
  name: string;
  slug: string;
  heroImg: string;
  heroTitle: string;
  heroSubtitle: string;
  benefitsTitle: string;
  buildPhotos: PhotoCard[];
  benefitCards: PhotoCard[];
  parentsTitle: string;
  parentsFeatures: Feature[];
  studentsTitle: string;
  studentsFeatures: Feature[];
  faqs?: { q: string; a: string }[];
  testimonials: { text: string; author: string }[];
  ctaHeading: string;
}

export default function ProgramPage({
  name,
  slug,
  heroImg,
  heroTitle,
  heroSubtitle,
  benefitsTitle,
  buildPhotos,
  benefitCards,
  parentsTitle,
  parentsFeatures,
  studentsTitle,
  studentsFeatures,
  faqs,
  testimonials,
  ctaHeading,
}: ProgramPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,25,70,0.72)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[70vh] px-4 py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BADGE_IMG} alt="Kansai Karate Academy" className="w-24 md:w-32 mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-snug">{heroTitle}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">{heroSubtitle}</p>
          <BookTrialButton
            program={slug}
            className="inline-block bg-[#FFB800] text-black font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
          />
        </div>
      </section>

      {/* ── BUILD BENEFITS HEADING STRIP ── */}
      <section className="bg-[#1a3a7a] text-white py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold">{benefitsTitle}</h2>
        </div>
      </section>

      {/* ── 3-PHOTO STRIP (Strength / Flexibility / Agility) ── */}
      {buildPhotos.length > 0 && (
        <section className="bg-white py-10 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildPhotos.map((p) => (
              <div key={p.caption}>
                <div
                  className="w-full rounded overflow-hidden bg-gray-200"
                  style={{ aspectRatio: "3/2" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.caption}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: p.objectPosition ?? "center" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#1a3a7a] mb-2">{p.caption}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── BLUE CTA STRIP ── */}
      <section className="bg-[#5B7DB1] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">{benefitsTitle}</h2>
          <BookTrialButton
            program={slug}
            className="inline-block border-2 border-white text-white font-bold px-10 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
          />
        </div>
      </section>

      {/* ── BENEFIT CARDS with portrait photos ── */}
      {benefitCards.length > 0 && (
        <section className="bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitCards.map((card) => (
              <div key={card.caption} className="text-center">
                <div
                  className="w-full rounded overflow-hidden bg-gray-200 mx-auto mb-5"
                  style={{ aspectRatio: "3/4", maxWidth: "280px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a7a] mb-3">{card.caption}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PARENTS LOVE SECTION ── */}
      <section className="py-14 px-4" style={{ background: "#f5f7fa" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-[#5B7DB1] text-sm uppercase tracking-widest mb-2">Tarragindi parents agree:</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{parentsTitle}</h2>
            <p className="text-gray-500 text-base">Why Tarragindi parents love {name} Classes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {parentsFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1a3a7a] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA STRIP ── */}
      <section className="bg-[#5B7DB1] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">{benefitsTitle}</h2>
          <BookTrialButton
            program={slug}
            className="inline-block border-2 border-white text-white font-bold px-10 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
          />
        </div>
      </section>

      {/* ── KIDS / STUDENTS LOVE SECTION ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-[#5B7DB1] text-sm uppercase tracking-widest mb-2">Tarragindi families agree:</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{studentsTitle}</h2>
            <p className="text-gray-500 text-base">Why they love {name} Classes at Kansai Karate Tarragindi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {studentsFeatures.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-[#1a3a7a] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#5B7DB1] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">{benefitsTitle}</h2>
          <BookTrialButton
            program={slug}
            className="inline-block border-2 border-white text-white font-bold px-10 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
          />
        </div>
      </section>

      {/* ── FAQs ── */}
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      {testimonials.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">What Kansai Karate Tarragindi Members Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#f5f7fa] rounded-lg p-8">
                  <p className="text-gray-600 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-[#5B7DB1] font-semibold text-sm">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section
        className="relative py-20 px-4 text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,25,70,0.88)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaHeading}</h2>
          <p className="text-white/70 text-lg mb-8">{benefitsTitle}</p>
          <BookTrialButton
            program={slug}
            className="inline-block bg-[#FFB800] text-black font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
          />
          <p className="mt-4 text-white/40 text-sm">
            Kansai Karate Tarragindi · Wellers Hill Bowls Club, 34 Esher St, Tarragindi QLD 4121
          </p>
        </div>
      </section>
    </>
  );
}
