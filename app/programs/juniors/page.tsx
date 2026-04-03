import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Juniors Program (Ages 8–12) | Kansai Karate Tarragindi",
  description: "Karate classes for 8–12 year olds in Tarragindi. Juniors builds discipline, resilience, and technical karate skills in a structured, encouraging environment. Monday, Tuesday and Thursday.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikaratetarragindi.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Juniors Karate (Ages 8–12)", "item": "https://kansaikaratetarragindi.com.au/programs/juniors" }
  ]
};

export default function JuniorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Juniors"
      slug="juniors"
      heroImg="/images/class2.jpg"
      headline="Kansai Karate Tarragindi Junior Classes set positive pathways for life!"
      subheadline="Martial Arts is one of the best possible activities for children. They'll learn to defend themselves physically, but more importantly they'll build the mental and emotional skill sets necessary to conquer challenges."
      introText=""
      benefitsHeading="Junior Classes Build Benefits for Life"
      benefits={[
        {
          title: "Mental & Emotional Growth",
          body: "They'll build the mental and emotional skill sets necessary to conquer challenges like high school, university, and becoming a healthy, balanced adult. Martial Arts is one of the best possible activities for children.",
        },
        {
          title: "Real Technique & Physical Development",
          body: "Kata, kumite, and conditioning. Students at this age can absorb real technique and start to develop their own karate style. They'll gain strength, flexibility, and coordination across Monday, Tuesday and Thursday evening classes.",
        },
        {
          title: "Every Child is Valued",
          body: "All children are valued members of the class and part of the team, regardless of their skill level. Nobody is left behind, and nobody is held back — Sensei Jason ensures every student trains at the right pace for them.",
        },
      ]}
      whyHeading="Why Kids Love Junior Classes"
      whyFeatures={[
        { title: "Mental Toughness", body: "Learning to push through difficulty, handle setbacks, and keep going. Skills that transfer directly to school, sport, and life." },
        { title: "Positive Peer Group", body: "Training alongside other motivated kids creates friendships built on shared challenge — a very different dynamic to school friendships." },
        { title: "Grading & Achievement", body: "Clear belt milestones give students real goals and visible progress. Every grading is a moment of genuine pride for the whole family." },
        { title: "Part of a Bigger Family", body: "Kansai Karate Tarragindi is part of the Kansai Karate Academy network, with access to events and competitions through QKA and AKF affiliations." },
      ]}
      testimonial={{
        text: "All children are valued members of the class and part of the team, regardless of their skill level",
        author: "Tarragindi parent",
      }}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Junior Classes Build Benefits for Life"
      secondaryImages={[
        "/images/class2.jpg",
        "/images/hero2.jpg",
        "/images/class7.jpg",
      ]}
    />
    </>
  );
}
