import Link from "next/link";
import Image from "next/image";
import { MapPin, GraduationCap, Shield, Clock } from "lucide-react";
import BookTrialButton from "@/components/BookTrialButton";

const HERO_IMG = "/images/hero.jpg";
const BADGE_IMG = "/images/logo.png";
const DOJO_INTERIOR = "/images/dojo-interior.jpg";

const programs = [
  {
    name: "Cubs",
    age: "Ages 3–4",
    href: "/programs/cubs",
    img: "/images/cubs.jpg",
    description:
      "The perfect first step for little ones aged 3–4. Cubs classes are short, fun and structured — building listening skills, body confidence and social skills in a caring environment.",
    isNew: true,
  },
  {
    name: "Little Lions",
    age: "Ages 5–7",
    href: "/programs/little-lions",
    img: "/images/little-lions.jpg",
    description:
      "Your 5–7 year old will surprise you. Little Lions classes build the focus, coordination and confidence that set kids up for school — wrapped in the most fun hour of their week. No experience needed, no gear required.",
  },
  {
    name: "Juniors",
    age: "Ages 8–12",
    href: "/programs/juniors",
    img: "/images/jnr-hero.jpg",
    description:
      "Karate is one of the best things an 8–12 year old can do with a Monday or Tuesday night. They'll build real fitness, focus and self-discipline in traditional Shitoryu Shukokai classes — and develop skills that follow them into school, sport and life.",
  },
  {
    name: "Teen Karate",
    age: "Ages 13+",
    href: "/programs/teens",
    img: "/images/teens-hero.jpg",
    description:
      "A class built for teenagers — not lumped in with little kids, not thrown in with adults. Teen Karate at Tarragindi gives teens a physical and mental outlet that builds genuine confidence and real self-defence skills.",
  },
  {
    name: "Adult Karate",
    age: "",
    href: "/programs/adults",
    img: "/images/adults.jpg",
    description:
      "Whether you want to get fitter, clear your head, learn to actually defend yourself, or just do something challenging — Adult Karate at Tarragindi is a real workout with real skills. Traditional Shitoryu Shukokai, all fitness levels.",
  },
];

const dojoFeatures = [
  {
    icon: <MapPin className="w-8 h-8 text-[#5B7DB1]" />,
    title: "A real southside dojo",
    body: "Kansai Karate Tarragindi trains at the Wellers Hill Bowls Club — a proper, purpose-run dojo that's been part of the southside community for years.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#5B7DB1]" />,
    title: "Sensei Jason Sallaway",
    body: "Sensei Jason holds a senior rank in Shitoryu Shukokai karate under Shihan Stephen Kelly. He's been teaching for years and genuinely loves it — you'll see that in every class.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#5B7DB1]" />,
    title: "Traditional Shitoryu Shukokai",
    body: "Not a commercial fitness program. Kansai Karate teaches authentic Japanese karate with an unbroken lineage — the same style as the main Kansai Karate Academy.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#5B7DB1]" />,
    title: "Class times that actually fit",
    body: "Monday, Tuesday and Thursday evenings — designed to fit around school runs, work schedules and the realities of southside Brisbane family life.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{ minHeight: "100vh" }}
      >
        <Image
          src={HERO_IMG}
          alt="Kansai Karate Tarragindi dojo class"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 30, 80, 0.65)" }}
        />
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <Image src={BADGE_IMG} alt="Kansai Karate Academy" width={160} height={160} className="w-32 md:w-40 mb-8" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-snug font-bold mb-4">
            Traditional Karate Classes in Tarragindi — Kids, Teens &amp; Adults
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-2 leading-snug">
            Helping <span className="text-[#FFB800]">Tarragindi kids</span> build genuine confidence, giving{" "}
            <span className="text-[#FFB800]">teens</span> a class that&apos;s actually designed for them, and giving{" "}
            <span className="text-[#FFB800]">adults</span> a real workout they&apos;ll actually look forward to.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <BookTrialButton className="bg-[#FFB800] text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest shadow-lg" />
            <p className="text-white/70 text-sm">No experience needed — first lesson is free</p>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Proudly Serving Tarragindi and surrounding communities.
            </h2>
            <p className="text-white/80 text-base mb-2">
              Kansai Karate Tarragindi is the southside Brisbane choice for families from Wellers Hill, Moorooka, Holland Park and Annerley.
            </p>
            <p className="text-white/70 text-lg">
              Find the Kansai Karate Tarragindi program for you:
            </p>
          </div>

          {/* Top row — 2 cards (Cubs + Little Lions) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {programs.slice(0, 2).map((p) => (
              <div
                key={p.href}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "380px" }}
              >
                <Image src={p.img} alt={`${p.name} karate program`} fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0" style={{ background: "rgba(10,20,50,0.78)" }} />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <div className="flex items-start gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-white">
                      {p.name}
                      {p.age && <><br /><span className="text-xl font-normal">({p.age})</span></>}
                    </h3>
                    {"isNew" in p && p.isNew && (
                      <span className="mt-1 shrink-0 bg-[#FFB800] text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">New</span>
                    )}
                  </div>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">{p.description}</p>
                  <Link
                    href={p.href}
                    className="mt-6 block text-center border border-white text-white font-bold py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row — 3 cards (Juniors, Teens, Adults) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {programs.slice(2).map((p) => (
              <div
                key={p.href}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "340px" }}
              >
                <Image src={p.img} alt={`${p.name} karate program`} fill sizes="(min-width: 768px) 33vw, 100vw" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0" style={{ background: "rgba(10,20,50,0.78)" }} />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.name}
                    {p.age && <><br /><span className="text-xl font-normal">({p.age})</span></>}
                  </h3>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">{p.description}</p>
                  <Link
                    href={p.href}
                    className="mt-6 block text-center border border-white text-white font-bold py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TARRAGINDI FAMILIES CHOOSE KANSAI ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
            <Image src={DOJO_INTERIOR} alt="Kansai Karate Tarragindi dojo" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Southside Brisbane&apos;s home of traditional karate</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Why Tarragindi families choose Kansai Karate
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {dojoFeatures.map((f) => (
                <div key={f.title}>
                  <div className="mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 px-4"
        style={{
          backgroundImage: "url(/images/dojo-interior.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,25,70,0.80)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Ready to be part of Kansai Karate Tarragindi?<br />
            Book your free first class today.
          </h2>
          <BookTrialButton className="inline-block bg-[#FFB800] text-black font-bold text-lg px-12 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest shadow-lg" />
        </div>
      </section>
    </>
  );
}
