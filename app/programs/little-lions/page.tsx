import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Little Lions Program (Ages 5–7) | Kansai Karate Tarragindi",
  description: "Karate classes for 5, 6, and 7 year olds in Tarragindi. Little Lions builds focus, respect, and real karate foundations in a fun, structured environment. Tuesday and Thursday afternoons.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikaratetarragindi.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Little Lions Karate (Ages 5–7)", "item": "https://kansaikaratetarragindi.com.au/programs/little-lions" }
  ]
};

export default function LittleLionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Little Lions"
      slug="little-lions"
      heroImg="/images/class1.jpg"
      headline="Little Lions Classes at Kansai Karate Tarragindi set positive pathways for life!"
      subheadline="There's nothing more satisfying than watching your 5–7 year old gain physical and social skills that you know will benefit them for life."
      introText=""
      benefitsHeading="Little Lions Classes Build Benefits for Life"
      benefits={[
        {
          title: "Focus, Self-Confidence and Discipline",
          body: "Your little one will learn focus, self-confidence and discipline, while getting a full body work out. Little Lions classes teach fantastic martial arts moves plus vital interpersonal skills that carry over into school, home and friendships.",
        },
        {
          title: "It's not just kids that love it...",
          body: "Parents love Little Lions because they see the benefits at home and at school. Better focus, improved behaviour, and a child who is genuinely excited to go to their activity every week. Classes run Tuesday and Thursday afternoons in Tarragindi.",
        },
        {
          title: "Structured Activity That Kids Actually Enjoy",
          body: "Everything we do is intentionally structured based on our extensive experience. Kids at Kansai Karate actually like the structure, because it makes them feel safe and cared for.",
        },
      ]}
      whyHeading="Why Kids Love Little Lions Classes"
      whyFeatures={[
        { title: "Amazing Classes", body: "Kids love classes at Kansai Karate because they're unbelievably fun (but parents love them because they build benefits for life!)" },
        { title: "Structured Activity", body: "Everything we do is intentionally structured based on our extensive experience. Kids actually like the structure, because it makes them feel safe." },
        { title: "Full Inclusion", body: "The culture at Kansai Karate Tarragindi is one of inclusion — no cliques, no cool kids club. Kids love it because they always feel like they belong!" },
        { title: "Awesome Fun!", body: "We guarantee that when they leave, it will have been 100% worth it, every time!" },
      ]}
      testimonial={{
        text: "The senseis are incredible — they're really engaging, fun, and they make sure the kids feel really comfortable and build their confidence",
        author: "Tarragindi parent",
      }}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Little Lions Classes Build Benefits for Life"
      secondaryImages={[
        "/images/class3.jpg",
        "/images/hero2.jpg",
        "/images/class6.jpg",
      ]}
    />
    </>
  );
}
