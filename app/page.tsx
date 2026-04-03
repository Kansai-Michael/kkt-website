import Link from "next/link";
import BookTrialButton from "@/components/BookTrialButton";

const BADGE_IMG = "/images/logo.png";
const HERO_IMG = "/images/hero.jpg";
const DOJO_INTERIOR = "/images/class1.jpg";
const KIDS_PHOTO = "/images/class3.jpg";
const ADULTS_PHOTO = "/images/class5.jpg";

const programs = [
  {
    name: "Little Lions",
    age: "Ages 5–7",
    href: "/programs/little-lions",
    img: "/images/class1.jpg",
    description:
      "There's nothing more satisfying than watching your 5–7 year old gain physical and social skills that you know will benefit them for life. Your little one will learn focus, self-confidence and discipline in a warm, encouraging environment.",
  },
  {
    name: "Juniors",
    age: "Ages 8–12",
    href: "/programs/juniors",
    img: "/images/class2.jpg",
    description:
      "Martial Arts is one of the best possible activities for children. They'll learn to defend themselves physically, but more importantly they'll build the mental and emotional skill sets necessary to conquer challenges at school and in life.",
  },
  {
    name: "Teen Karate",
    age: "Ages 13–17",
    href: "/programs/teens",
    img: "/images/class4.jpg",
    description:
      "Karate is the perfect activity for teenagers. It gives them an outlet for their energy in a structured class designed just for them — not lumped in with little kids, not thrown in with adults.",
  },
  {
    name: "Adult Karate",
    age: "Ages 18+",
    href: "/programs/adults",
    img: "/images/class5.jpg",
    description:
      "Whether it's fitness, self-defence, or a genuine challenge — our Adult Karate classes are designed for real people. You'll love the instruction, your body will love the workout, and your spirit will love the community.",
  },
];

const whyFeatures = [
  {
    icon: "🥋",
    title: "Traditional Shitoryu Shukokai",
    body: "We teach the complete art — kata, kihon, kumite, and the philosophy behind each. Students who train here are learning something real, part of a lineage that stretches back decades.",
  },
  {
    icon: "👥",
    title: "Part of the Kansai Karate Academy Family",
    body: "Kansai Karate Tarragindi is part of the Kansai Karate Academy network, led by Shihan Stephen Kelly. Our students have access to gradings, events, and competitions through QKA and AKF affiliations.",
  },
  {
    icon: "📅",
    title: "Age-Specific Classes",
    body: "Every program is designed for a specific age group and energy level. Little Lions are never mixed with Juniors, and Teens have their own class separate from adults. Everyone trains at the right level.",
  },
  {
    icon: "🌟",
    title: "A Community That Cares",
    body: "Our positive atmosphere is genuine. From the first class, families tell us they felt immediately welcomed. No cliques, no ego — just people working hard and supporting each other.",
  },
];

const testimonials = [
  {
    text: "The senseis are incredible — they're really engaging, fun, and they make sure the kids feel really comfortable and build their confidence",
    author: "Tarragindi parent",
  },
  {
    text: "All children are valued members of the class and part of the team, regardless of their skill level",
    author: "Tarragindi parent",
  },
  {
    text: "A blast while being packed with benefits for kids",
    author: "Tarragindi parent",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Blue-tinted dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 30, 80, 0.62)" }}
        />
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {/* Badge */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BADGE_IMG}
            alt="Kansai Karate Academy"
            className="w-32 md:w-40 mb-8"
          />
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-snug font-bold mb-4">
            Traditional Karate for Families in Tarragindi
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Led by <strong className="text-white">Sensei Jason Sallaway</strong>, Kansai Karate Tarragindi offers warm, structured karate classes for Little Lions, Juniors, Teens and Adults in a friendly family environment.
          </p>
          <BookTrialButton
            className="inline-block bg-[#FFB800] text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
          />
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Proudly serving Tarragindi and surrounding communities.
            </h2>
            <p className="text-white/70 text-lg">
              Find the Kansai Karate program for your family:
            </p>
          </div>

          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {programs.slice(0, 2).map((p) => (
              <div
                key={p.href + p.name}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "380px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(10,20,50,0.78)" }}
                />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.name}
                    <br />
                    <span className="text-xl font-normal">({p.age})</span>
                  </h3>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">
                    {p.description}
                  </p>
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

          {/* Bottom row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.slice(2).map((p) => (
              <div
                key={p.href + p.name}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "340px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(10,20,50,0.78)" }}
                />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.name}
                    {p.age && (
                      <>
                        <br />
                        <span className="text-xl font-normal">({p.age})</span>
                      </>
                    )}
                  </h3>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">
                    {p.description}
                  </p>
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

      {/* ── WHY CHOOSE KANSAI KARATE TARRAGINDI ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo — 1/3 */}
          <div className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${DOJO_INTERIOR})` }}
          />
          {/* Features — 2/3 */}
          <div className="md:col-span-2">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              The best in Tarragindi
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Why choose Kansai Karate Tarragindi
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {whyFeatures.map((f) => (
                <div key={f.title}>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SENSEI JASON ── */}
      <section className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Features — 2/3 */}
          <div className="md:col-span-2">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              Your head instructor
            </p>
            <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
              About Sensei Jason Sallaway
            </h2>
            <hr className="border-white/30 mb-8 w-16" />
            <p className="text-white/85 text-base leading-relaxed mb-4">
              Sensei Jason Sallaway leads Kansai Karate Tarragindi with warmth, patience, and a genuine love of the art. He is part of the Kansai Karate Academy family, operating under Shihan Stephen Kelly — ensuring every student at Tarragindi benefits from a strong, proven teaching lineage.
            </p>
            <p className="text-white/85 text-base leading-relaxed mb-4">
              Kansai Karate Tarragindi is a place where every student is seen, valued, and challenged to grow — whether they are stepping on the mat for the very first time or working towards their next belt grading.
            </p>
            <p className="text-white/85 text-base leading-relaxed">
              Our classes run Monday, Tuesday and Thursday evenings, with programs for every age group from Little Lions (5–7 years) through to Adults.
            </p>
          </div>
          {/* Photo — 1/3 */}
          <div className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${KIDS_PHOTO})` }}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo — 1/3 */}
          <div className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${ADULTS_PHOTO})` }}
          />
          {/* Testimonials — 2/3 */}
          <div className="md:col-span-2">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              What parents say
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Families love Kansai Karate Tarragindi
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 italic leading-relaxed mb-3">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-[#5B7DB1] font-semibold text-sm">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Try a Free Class?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a no-obligation free trial and see why Tarragindi families choose Kansai Karate.
          </p>
          <BookTrialButton
            className="inline-block bg-[#FFB800] text-white font-bold text-lg px-12 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
          />
        </div>
      </section>
    </>
  );
}
