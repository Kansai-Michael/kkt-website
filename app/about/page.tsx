import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kansai Karate Tarragindi | Sensei Jason Sallaway",
  description: "Kansai Karate Tarragindi is led by Sensei Jason Sallaway. Traditional Shitoryu Shukokai karate in Tarragindi, Brisbane, affiliated with Kansai Karate Academy, QKA and AKF.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jason Sallaway",
  "honorificPrefix": "Sensei",
  "jobTitle": "Head Instructor",
  "description": "Head instructor at Kansai Karate Tarragindi. Shitoryu Shukokai karate instructor operating under Kansai Karate Academy.",
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
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kansai Karate Tarragindi</h1>
          <p className="text-xl text-white/80">
            Traditional Japanese karate, taught with genuine care for every student who walks through the door.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Sensei Jason */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Your Instructor</h2>
            <p className="text-gray-600 mb-4">
              <strong>Sensei Jason Sallaway</strong> is the head instructor at Kansai Karate Tarragindi. He is part of the <strong>Kansai Karate Academy</strong> family, operating under <strong>Shihan Stephen Kelly</strong> (7th Dan, Kyoshi) — one of Australia's most respected karate authorities and founder of Kansai Karate Academy in 1993.
            </p>
            <p className="text-gray-600 mb-4">
              Sensei Jason brings warmth, patience, and deep technical knowledge to every class. He believes karate should be accessible to everyone — from a 5-year-old stepping on the mat for the first time to an adult looking for a genuine challenge that means something.
            </p>
            <p className="text-gray-600">
              At Kansai Karate Tarragindi, every student is seen, valued, and challenged to grow. The dojo has become a genuine community for families in Tarragindi and the surrounding suburbs.
            </p>
          </div>

          {/* The Style */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">The Style: Shitoryu Shukokai</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Tarragindi teaches <strong>Shitoryu Shukokai</strong> — a traditional Japanese karate style known for its technical precision, powerful strikes, and emphasis on practical application.
            </p>
            <p className="text-gray-600">
              Unlike many modern martial arts schools, we teach the complete art: kata (forms), kihon (basics), kumite (sparring), and the philosophy behind each. Students who train here are learning something real, part of a lineage with deep roots in Japan and Australia.
            </p>
          </div>

          {/* Kansai Karate Academy */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Kansai Karate Academy</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Academy was founded in 1993 by Shihan Stephen Kelly. The Academy now has dojos across Brisbane and the Gold Coast, each led by qualified, licensed instructors committed to the same high standards of teaching and student care.
            </p>
            <p className="text-gray-600">
              Being part of the Academy means Tarragindi students have access to shared gradings, Academy events, and a broader karate community — while still enjoying the close-knit, family feel of their local dojo.
            </p>
          </div>

          {/* Affiliations */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Affiliations</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "QKA", full: "Queensland Karate Association" },
                { name: "AKF", full: "Australian Karate Federation" },
                { name: "Kansai Karate Academy", full: "Member of Kansai Karate Academy" },
              ].map((a) => (
                <div key={a.name} className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 text-sm">
                  <span className="font-bold text-[#003087]">{a.name}</span>
                  <span className="text-gray-500 ml-2">— {a.full}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Our Dojo</h2>
            <p className="text-gray-600 mb-4">
              We are located at 195 Fingal Street, Tarragindi QLD 4121. Classes run Monday, Tuesday and Thursday evenings, with programs for Little Lions (5–7), Juniors (8–12), Teens (13–17) and Adults (18+).
            </p>
            <p className="text-gray-600 mb-6">
              Phone: <a href="tel:0738485949" className="text-[#003087] hover:underline">07 3848 5949</a> &nbsp;|&nbsp;
              Email: <a href="mailto:jason@kansaikaratetarragindi.com.au" className="text-[#003087] hover:underline">jason@kansaikaratetarragindi.com.au</a>
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#003087] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#001A52] transition-colors"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
