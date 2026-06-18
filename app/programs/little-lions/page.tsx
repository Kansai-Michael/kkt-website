import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little Lions Program (Ages 5–7) | Kansai Karate Tarragindi",
  description: "Karate classes for 5, 6, and 7 year olds in Tarragindi. Little Lions builds focus, respect, and real karate foundations in a fun, structured environment. Tuesday and Thursday afternoons.",
  alternates: { canonical: "https://kansaikaratetarragindi.com.au/programs/little-lions" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "My child is shy — will they cope in a group class?", "acceptedAnswer": { "@type": "Answer", "text": "Many of our Little Lions students start shy and blossom within the first few weeks. Our instructors are experienced with this age group and create an encouraging environment where every child feels included and safe." } },
    { "@type": "Question", "name": "What will my child learn in Little Lions?", "acceptedAnswer": { "@type": "Answer", "text": "Focus, listening skills, coordination, self-confidence, and the foundations of Shitoryu Shukokai karate — including basic stances, blocks, and strikes — delivered through fun, structured activities." } },
    { "@type": "Question", "name": "How often should they train?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend twice a week for the best results. Once a week is a great starting point if you want to ease in, and many families find their kids quickly want to come more often." } },
    { "@type": "Question", "name": "Can they earn belts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Little Lions can grade for their first coloured belt. Gradings happen every few months and are a huge confidence milestone for kids this age." } },
    { "@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we offer a free trial class with no obligation. Book online and bring your child along. If they love it (they usually do), we'll get them started from there." } }
  ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
        name="Little Lions"
        slug="little-lions"
        heroImg="/images/little-lions.jpg"
        heroTitle="Little Lions Classes at Kansai Karate Tarragindi set positive pathways for life!"
        heroSubtitle="Little Lions classes build focus, coordination and real confidence in kids aged 5–7 — in a structured, caring environment where every child feels they belong."
        benefitsTitle="Little Lions Classes Build Benefits for Life"
        buildPhotos={[
          {
            img: "/images/ll-1.jpg",
            caption: "Focus & Discipline",
            objectPosition: "center 75%",
            body: "Your little one will learn focus, self-confidence and discipline, while getting a full body workout. Little Lions classes teach fantastic martial arts moves plus vital interpersonal skills.",
          },
          {
            img: "/images/ll-2.jpg",
            caption: "Self-Confidence",
            objectPosition: "center 25%",
            body: "Kids at Kansai Karate Tarragindi build deep, unshakeable confidence that they carry into school, home and friendships — confidence that grows with every class.",
          },
          {
            img: "/images/ll-3.jpg",
            caption: "Fun & Active!",
            body: "We know that getting your child out of the house and across town is a big deal. We guarantee that when they leave, it will have been 100% worth it, every time!",
          },
        ]}
        benefitCards={[
          {
            img: "/images/ll-4.jpg",
            caption: "Focus",
            body: "Little Lions classes give kids the ability to focus and concentrate. They'll develop sustained patience and the ability to listen — skills that carry over directly into the classroom.",
          },
          {
            img: "/images/ll-5.jpg",
            caption: "Coordination",
            body: "Karate builds gross and fine motor skills in a way that few activities can. Your child will develop balance, awareness and body coordination that will benefit them for life.",
          },
          {
            img: "/images/ll-6.jpg",
            caption: "Confidence",
            body: "Confidence isn't just a buzzword — it's what we do. Your child will build real, lasting confidence that they'll carry everywhere they go, from their very first class.",
          },
        ]}
        parentsTitle="Parents Love Little Lions"
        parentsFeatures={[
          {
            title: "Class Times",
            body: "Little Lions class times were designed for real family schedules. Monday 4:30–5:15pm, Tuesday and Thursday 4:15–5:00pm — you're almost guaranteed to find a time that works.",
          },
          {
            title: "Community",
            body: "Your child will be surrounded by peers their own age, all striving towards the same goals. They'll build friendships and be supported in their individual journey.",
          },
          {
            title: "Life Skills",
            body: "There's literally no better place for your child to start learning life skills like persistence, respect and empathy. They'll learn from caring, role-model instructors.",
          },
          {
            title: "Physical Skills",
            body: "At 5–7, kids are developing core movement patterns that shape their body for life. Little Lions builds gross motor skills, spatial awareness and hand-eye coordination through structured karate movements — a foundation no gym program can match.",
          },
        ]}
        studentsTitle="Kids Love Little Lions Classes"
        studentsFeatures={[
          {
            title: "Amazing Classes",
            body: "Kids love Little Lions classes at Kansai Karate Tarragindi because they're unbelievably fun — but parents love them because they build benefits for life!",
          },
          {
            title: "Structured Activity",
            body: "Everything we do is intentionally structured based on our extensive experience. Kids actually like the structure, because it makes them feel safe and cared for.",
          },
          {
            title: "Full Inclusion",
            body: "The culture at Kansai Karate Tarragindi is one of inclusion — no cliques, no cool kids club, no unkind actions or attitudes. Kids love it because they always feel like they belong!",
          },
          {
            title: "Awesome Fun!",
            body: "It's so much fun! At Kansai Karate Tarragindi, we guarantee that when they leave, it will have been 100% worth it, every single time!",
          },
        ]}
        testimonials={[
          {
            text: "The senseis are incredible — they're really engaging, fun, and they make sure the kids feel really comfortable and build their confidence. My daughter is loving karate and it's improving her discipline, focus and coordination. Highly recommended!",
            author: "Little Lions parent, Tarragindi",
          },
          {
            text: "Fantastic dojo for the whole family! Wonderful atmosphere of support and friendly teachers. Highly recommended!",
            author: "Little Lions parent, Tarragindi",
          },
        ]}
        faqs={[
          { q: "My child is shy — will they cope in a group class?", a: "Many of our Little Lions students start shy and blossom within the first few weeks. Our instructors are experienced with this age group and create an encouraging environment where every child feels included and safe." },
          { q: "What will my child learn in Little Lions?", a: "Focus, listening skills, coordination, self-confidence, and the foundations of Shitoryu Shukokai karate — including basic stances, blocks, and strikes — delivered through fun, structured activities." },
          { q: "How often should they train?", a: "We recommend twice a week for the best results. Once a week is a great starting point if you want to ease in, and many families find their kids quickly want to come more often." },
          { q: "Can they earn belts?", a: "Yes! Little Lions can grade for their first coloured belt. Gradings happen every few months and are a huge confidence milestone for kids this age." },
          { q: "Is there a free trial?", a: "Yes — we offer a free trial class with no obligation. Book online and bring your child along. If they love it (they usually do), we'll get them started from there." },
        ]}
        ctaHeading="This could be the best thing you've ever done for your child."
      />
    </>
  );
}
