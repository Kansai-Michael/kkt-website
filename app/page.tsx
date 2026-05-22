import Link from "next/link";
import BookTrialButton from "@/components/BookTrialButton";

const BADGE_IMG = "/images/logo.png";
const HERO_IMG = "/images/hero.jpg";
const DOJO_INTERIOR = "/images/dojo-interior.jpg";
const KIDS_PHOTO = "/images/little-lions.jpg";

const programs = [
  {
    name: "Little Lions",
    age: "Ages 5–7",
    href: "/programs/little-lions",
    img: "/images/little-lions.jpg",
    description:
      "There's nothing more satisfying than watching your 5–7 year old gain physical and social skills that you know will benefit them for life. Your little one will learn focus, self-confidence and discipline, while getting a full body work out. Preschool Martial Arts teach fantastic martial arts moves plus vital interpersonal skills.",
  },
  {
    name: "Juniors",
    age: "Ages 8–12",
    href: "/programs/juniors",
    img: "/images/juniors.jpg",
    description:
      "Martial Arts is one of the best possible activities for children. They'll learn to defend themselves physically, but more importantly they'll build the mental and emotional skill sets necessary to conquer challenges like high school, college, and becoming a healthy, balanced adult.",
  },
  {
    name: "Teen Karate",
    age: "Ages 13+",
    href: "/programs/teens",
    img: "/images/teens.jpg",
    description:
      "Martial Arts is the perfect activity for teenagers! It gives them an outlet for their unique energy through engagement and gross motor skill activity, but at Kansai Karate Tarragindi, they'll do it in a structured class designed and taught just for them.",
  },
  {
    name: "Adult Karate",
    age: "",
    href: "/programs/adults",
    img: "/images/adults.jpg",
    description:
      "Whether it's losing weight, building muscle, learning to defend yourself, or just having a blast, our Adult Martial Arts classes have what you need. You'll love the high energy class instruction, your body will love the awesome workout, and your spirit will love the camaraderie and positive atmosphere.",
  },
];

const whyFeatures = [
  {
    title: "Schedule Focused",
    body: "Our programs were created for real family schedules. Convenient class times mean that kids, adults, and whole families can improve their quality of life without killing every moment of spare time.",
  },
  {
    title: "Community Positive",
    body: "Our positive atmosphere is contagious, and you'll know without a doubt that you're in a place where kids will learn positive habits and adults will make meaningful, lasting friendships.",
  },
  {
    title: "Values Oriented",
    body: "All of our programs improve physical prowess, and that's important. But what's far more important is the mental and emotional benefits that our programs bring to everyday life.",
  },
  {
    title: "Movement Based",
    body: "Both kids and adults will gain flexibility, agility, and strength, even if they aren't athletic! They'll love it, because it's not only super fun, it's inclusive and accommodating at every step.",
  },
];

const kidsFeatures = [
  {
    title: "Amazing Classes",
    body: "Kids love classes at Kansai Karate Tarragindi because they're unbelievably fun (but parents love them because they build benefits for life!)",
  },
  {
    title: "Structured Activity",
    body: "Everything we do is intentionally structured based on our extensive experience. Kids at Kansai Karate Tarragindi actually like the structure, because it makes them feel safe and cared for. They can trust deep down that they're safe to explore and challenge themselves.",
  },
  {
    title: "Full Inclusion",
    body: "We take kids' emotions seriously. The culture at Kansai Karate Tarragindi is one of inclusion — no cliques, no cool kids club, no unkind actions or attitudes. Kids love it because they always feel like they belong!",
  },
  {
    title: "Awesome Fun!",
    body: "It's so much fun! At Kansai Karate Tarragindi, we know that getting your child out of the house, in the car, and across town to an activity is a big deal. We guarantee that when they leave, it will have been 100% worth it, every time!",
  },
];

const adultsFeatures = [
  {
    title: "Curriculum",
    body: "Our classes were designed specifically for the average person. You'll build skills step by step, without having to be a superstar to see improvement. But stick with it, and you'll see your abilities soar!",
  },
  {
    title: "Community",
    body: "You'll be surrounded by peers striving towards the same goals you are, day in, day out. You'll build friendships and be supported in your individual journey.",
  },
  {
    title: "Mental Health",
    body: "We've always known it, but now the science agrees: You must take time for your own mental health. Our classes help you clear your mind, accomplish your goals, and be more healthy, from the inside out.",
  },
  {
    title: "Physical Skills",
    body: "It's more than just learning awesome looking moves — it's proprioception, balance, agility and more — physical skills that will remain with and benefit you for the rest of your life.",
  },
];

const testimonials = [
  {
    text: "The sensei's are incredible; they're really engaging, fun, and they make sure the kids feel really comfortable and build their confidence. My daughter is loving karate and it's improving her discipline, focus and coordination. Highly recommended!",
    author: "Member Feedback",
  },
  {
    text: "Fantastic dojo for the whole family! Wonderful atmosphere of support and friendly teachers. Highly recommended!",
    author: "Member Feedback",
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
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 30, 80, 0.65)" }}
        />
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BADGE_IMG}
            alt="Kansai Karate Academy"
            className="w-32 md:w-40 mb-8"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-snug font-bold mb-4">
            Kids build{" "}
            <span style={{ color: "#FFB800" }}>Focus and Discipline</span>,
            Teens find classes{" "}
            <span style={{ color: "#FFB800" }}>designed just for them</span>,
            and Adults have a workout that helps keep them{" "}
            <span style={{ color: "#FFB800" }}>fit &amp; safe</span>
          </h1>
          <BookTrialButton
            className="inline-block bg-[#FFB800] text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest mt-6"
          />
          <p className="mt-4 text-white/50 text-sm">No experience needed — first lesson is free</p>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Proudly Serving Tarragindi and surrounding communities.
            </h2>
            <p className="text-white/70 text-lg">
              Find the Kansai Karate Tarragindi program for you:
            </p>
          </div>

          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {programs.slice(0, 2).map((p) => (
              <div
                key={p.href}
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

          {/* Bottom row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.slice(2).map((p) => (
              <div
                key={p.href}
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

      {/* ── WHY TARRAGINDI CHOOSES KANSAI ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div
            className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${DOJO_INTERIOR})` }}
          />
          <div className="md:col-span-2">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              The best in Tarragindi
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Why Tarragindi chooses Kansai Karate Tarragindi
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {whyFeatures.map((f) => (
                <div key={f.title}>
                  <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KIDS CHOOSE KANSAI ── */}
      <section className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div
            className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${KIDS_PHOTO})` }}
          />
          <div className="md:col-span-2">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              Tarragindi Kids agree:
            </p>
            <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
              Kids choose Kansai Karate Tarragindi every time
            </h2>
            <hr className="border-white/30 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {kidsFeatures.map((f) => (
                <div key={f.title}>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ADULTS LOVE KANSAI ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              Programs built for real people
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Why Adults love Kansai Karate Tarragindi Programs
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adultsFeatures.map((f) => (
              <div key={f.title}>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              What do actual Kansai Karate Tarragindi members say?
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              We send regular member feedback surveys to our members. Here&apos;s a sample of the real feedback we get regularly:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white rounded-lg">
                <p className="text-gray-700 italic leading-relaxed mb-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-[#5B7DB1] font-semibold text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to be part of Kansai Karate Tarragindi?<br />
            Select a Program and Get Started Today!
          </h2>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            Kansai Karate Tarragindi is the favourite choice of Tarragindi families for their children&apos;s and teens&apos; physical, mental and emotional development. Plus there&apos;s no better facility for adults to improve their physical health and mental wellness. Schedule a trial today!
          </p>
          <BookTrialButton
            className="inline-block bg-[#FFB800] text-white font-bold text-lg px-12 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
          />
          <p className="mt-4 text-gray-400 text-sm">Spaces limited — book your free trial today</p>
        </div>
      </section>
    </>
  );
}
