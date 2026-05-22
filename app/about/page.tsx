import BookTrialButton from "@/components/BookTrialButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kansai Karate Tarragindi | Sensei Jason Sallaway",
  description: "Learn about Kansai Karate Tarragindi, led by Sensei Jason Sallaway. Traditional Shitoryu Shukokai karate at Wellers Hill Bowls Club, Tarragindi. Affiliated with Kansai Karate Academy, QKA and AKF.",
  alternates: { canonical: "https://kansaikaratetarragindi.com.au/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jason Sallaway",
  "honorificPrefix": "Sensei",
  "jobTitle": "Head Instructor",
  "description": "Head instructor at Kansai Karate Tarragindi. A licensed dojo of Kansai Karate Academy, operating under Shihan Stephen Kelly.",
  "image": "https://kansaikaratetarragindi.com.au/images/instructor-jason.png",
  "worksFor": {
    "@type": "SportsActivityLocation",
    "name": "Kansai Karate Tarragindi",
    "url": "https://kansaikaratetarragindi.com.au"
  }
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <section className="bg-[#1a3a7a] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kansai Karate Tarragindi</h1>
          <p className="text-xl text-white/80">
            Traditional Japanese karate, taught with genuine care for every student who walks through the door.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* About the Organisation */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a7a] mb-4">About Kansai Karate</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Academy was established in Queensland and is one of the leading martial arts organisations in the state, operating dojos across Brisbane, the Gold Coast and beyond. Kansai Karate Tarragindi is the local dojo for the Tarragindi and southern Brisbane community — part of a network built on the same values since day one: traditional technique, genuine instruction, and a family-friendly environment.
            </p>
            <p className="text-gray-600">
              With programs running from age 5 through to adults, the Tarragindi dojo serves families from Tarragindi, Wellers Hill, Moorooka, Annerley, Holland Park, Greenslopes, and the wider Brisbane southside.
            </p>
          </div>

          {/* Head Instructor */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a7a] mb-6">Your Head Instructor</h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 h-40 rounded-lg overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/instructor-jason.png"
                  alt="Sensei Jason Sallaway — Head Instructor, Kansai Karate Tarragindi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sensei Jason Sallaway</h3>
                <p className="text-gray-600 mb-4">
                  Sensei Jason Sallaway leads Kansai Karate Tarragindi with warmth, patience, and a genuine love of the art. He is a licensed instructor under Kansai Karate Academy, operating within the teaching framework established by Shihan Stephen Kelly — ensuring every student at Tarragindi benefits from a strong, proven teaching lineage.
                </p>
                <p className="text-gray-600 mb-4">
                  Kansai Karate Tarragindi is a place where every student is seen, valued, and challenged to grow — whether they are stepping on the mat for the very first time or working towards their next belt grading.
                </p>
                <p className="text-gray-600">
                  Classes run Monday, Tuesday and Thursday evenings, with programs for every age group from Little Lions (5–7 years) through to Adults. The dojo is based at the Wellers Hill Bowls Club — a welcoming and well-resourced training space for the Tarragindi community.
                </p>
              </div>
            </div>
          </div>

          {/* Kansai Karate Academy */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a7a] mb-4">Kansai Karate Academy</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Tarragindi is a licensed dojo of <strong>Kansai Karate Academy</strong>, led by <strong>Shihan Stephen Kelly</strong>. The Academy maintains the highest standards of instruction across all affiliated dojos, with regular seminars, gradings, and events that connect students across the network.
            </p>
            <p className="text-gray-600">
              As a student of Kansai Karate Tarragindi, you benefit from this network — including access to Queensland Karate Association and Australian Karate Federation gradings, events, and competitions.
            </p>
          </div>

          {/* The Style */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a7a] mb-4">The Style: Shitoryu Shukokai</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate teaches <strong>Shitoryu Shukokai</strong> — a traditional Japanese karate style known for its technical precision, powerful strikes, and emphasis on practical application. The style traces directly to Sensei Tani, founder of Shukokai, and is maintained through a direct lineage to Japan.
            </p>
            <p className="text-gray-600">
              Students learn the complete art: kata (forms), kihon (basics), kumite (sparring), and the philosophy behind each. Unlike many modern martial arts schools, we teach something real — and students who train here know the difference.
            </p>
          </div>

          {/* Affiliations */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a7a] mb-4">Affiliations</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Tarragindi is affiliated with the Queensland Karate Association (QKA) and the Australian Karate Federation (AKF) — the recognised governing bodies for karate in Queensland and Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Kansai Karate Academy", full: "Licensed dojo of Kansai Karate Academy", href: "https://kansaikarate.com.au/" },
                { name: "Queensland Karate Association", full: "State governing body for karate", href: "https://karatequeensland.com.au/" },
                { name: "Australian Karate Federation", full: "National governing body for karate", href: "https://www.karateaustralia.org.au/" },
              ].map((a) => (
                <a
                  key={a.name}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 text-sm hover:border-[#5B7DB1] transition-colors"
                >
                  <span className="font-bold text-[#1a3a7a]">{a.name}</span>
                  <span className="text-gray-500 ml-2">— {a.full}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a7a] mb-4">Our Dojo</h2>
            <p className="text-gray-600 mb-4">
              We are located at Wellers Hill Bowls Club, 34 Esher St, Tarragindi QLD 4121 — conveniently situated for families from Tarragindi, Wellers Hill, Moorooka, Annerley, Salisbury, Rocklea, Yeronga, Greenslopes, Holland Park, and surrounding areas.
            </p>
            <div className="rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.282!2d153.0361!3d-27.5112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9141d4e03af421%3A0x1234567890abcdef!2sWellers%20Hill%20Bowls%20Club%2C%2034%20Esher%20St%2C%20Tarragindi%20QLD%204121!5e0!3m2!1sen!2sau!4v1716300000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kansai Karate Tarragindi location map"
              />
            </div>
            <p className="text-gray-600 mb-6">
              <strong>Phone:</strong>{" "}
              <a href="tel:0480566172" className="text-[#5B7DB1] hover:underline">0480 566 172</a>
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:jason@kansaikaratetarragindi.com.au" className="text-[#5B7DB1] hover:underline">jason@kansaikaratetarragindi.com.au</a>
            </p>
            <BookTrialButton
              className="inline-block bg-[#1a3a7a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0f2455] transition-colors"
            />
          </div>

        </div>
      </section>
    </>
  );
}
