import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juniors Program (Ages 8–12) | Kansai Karate Tarragindi",
  description: "Karate classes for 8–12 year olds in Tarragindi. Juniors builds discipline, resilience, and technical karate skills in a structured, encouraging environment. Monday, Tuesday and Thursday.",
  alternates: { canonical: "https://kansaikaratetarragindi.com.au/programs/juniors" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "My child has never done a martial art before — is that OK?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most of our Juniors students start with zero experience. Classes are structured so beginners progress at their own pace alongside more experienced students." } },
    { "@type": "Question", "name": "What will my child learn in Juniors Karate?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional Shitoryu Shukokai karate — including kicks, punches, blocks, kata (forms), and basic sparring — alongside discipline, focus, and respect. Skills that carry over into school and life." } },
    { "@type": "Question", "name": "How often should they train?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend two or three times a week. Monday, Tuesday and Thursday evenings are available — most families find a combination that works around school and other activities." } },
    { "@type": "Question", "name": "Can they earn belts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Grading happens every few months and is one of the most rewarding parts of training. Kids love the recognition of working hard and progressing through the belt system." } },
    { "@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — book a free trial class with no obligation. Bring them along, see what they think, and take it from there. Most kids are asking to come back before they've even left the dojo." } }
  ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
        name="Juniors"
        slug="juniors"
        heroImg="/images/jnr-hero.jpg"
        heroTitle="Juniors Classes at Kansai Karate Tarragindi mean Focus, Fitness and Fun!"
        heroSubtitle="Juniors Karate at Tarragindi gives 8–12 year olds real skills, genuine fitness and the kind of self-discipline that shows up everywhere — at school, at home, and in sport."
        benefitsTitle="Juniors Karate Classes Build Benefits for Life"
        buildPhotos={[
          {
            img: "/images/jnr-1.jpg",
            caption: "Strength",
            body: "Juniors Karate classes build strength in a real, functional way that benefits children of all ages. They'll see their strength grow in real time from the very first few weeks.",
          },
          {
            img: "/images/jnr-2.jpg",
            caption: "Flexibility",
            body: "Flexibility isn't just for showing off — it has tremendous health benefits from increased quality of life to injury reduction. Your child will develop it naturally through every class.",
          },
          {
            img: "/images/jnr-3.jpg",
            caption: "Agility",
            body: "Increased balance, awareness and precision turn your child into a real life ninja — and they'll absolutely love it! Agility that carries into every sport and activity they do.",
          },
        ]}
        benefitCards={[
          {
            img: "/images/jnr-4.jpg",
            caption: "Focus",
            body: "Juniors Karate gives kids laser-like focus. They'll develop the ability to concentrate with sustained patience — a skill that benefits them in school and throughout life.",
          },
          {
            img: "/images/jnr-5.jpg",
            caption: "Determination",
            body: "Children need a safe, structured place to learn to overcome obstacles and build grit and determination. Juniors Karate is exactly that — a place to grow stronger through challenge.",
          },
          {
            img: "/images/jnr-6.jpg",
            caption: "Confidence",
            body: "Confidence isn't just a buzzword — it's what we do. Your child will build deep, unshakeable confidence that they'll take everywhere they go, for the rest of their lives.",
          },
        ]}
        parentsTitle="Parents Love Juniors Karate"
        parentsFeatures={[
          {
            title: "Class Times",
            body: "Juniors Karate class times were designed by parents for parents — Monday, Tuesday and Thursday evenings. You're almost guaranteed to find a time that works for your family.",
          },
          {
            title: "Community",
            body: "Your child will be surrounded by peers striving towards the same goals they are. They'll build real friendships and be supported in their individual journey.",
          },
          {
            title: "Life Skills",
            body: "There's literally no better place for your child to learn life skills like Persistence, Determination and Empathy. They'll learn from caring, role-model instructors and they'll love it.",
          },
          {
            title: "Physical Skills",
            body: "Karate is one of the most complete physical activities for 8–12 year olds. Your child will build agility, reaction speed and body control that translates directly into every other sport and physical activity they do.",
          },
        ]}
        studentsTitle="Kids Love Juniors Karate Classes"
        studentsFeatures={[
          {
            title: "Real Strength",
            body: "Kids can see their own strength building after only a few weeks. They love to see their strength grow in real time, working each day on becoming the strongest version of themselves.",
          },
          {
            title: "Amazing Agility",
            body: "Yes, every child thinks they're already a ninja! Once they get into class, they start learning actual real moves — and they absolutely love feeling like a superhero.",
          },
          {
            title: "They Feel 'Cool'",
            body: "Many kids are new to Kansai Karate Tarragindi, but almost all of them know how awesome it is to be here. It's a blast, and parents can feel great knowing it's packed with benefits.",
          },
          {
            title: "They Have FUN!",
            body: "We're Martial Arts teachers because we love what we do — and that shows through every single day. The joy is infectious. It's the most fun activity available for them, hands down!",
          },
        ]}
        testimonials={[
          {
            text: "Good exercise and skills to learn — all kids should learn the life skills taught here to build confidence and techniques that will help them with life's encounters.",
            author: "Juniors parent, Tarragindi",
          },
          {
            text: "Great educational and motivational activity for children. The team is so friendly and passionate. Highly recommended.",
            author: "Juniors parent, Tarragindi",
          },
        ]}
        faqs={[
          { q: "My child has never done a martial art before — is that OK?", a: "Absolutely. Most of our Juniors students start with zero experience. Classes are structured so beginners progress at their own pace alongside more experienced students." },
          { q: "What will my child learn in Juniors Karate?", a: "Traditional Shitoryu Shukokai karate — including kicks, punches, blocks, kata (forms), and basic sparring — alongside discipline, focus, and respect. Skills that carry over into school and life." },
          { q: "How often should they train?", a: "We recommend two or three times a week. Monday, Tuesday and Thursday evenings are available — most families find a combination that works around school and other activities." },
          { q: "Can they earn belts?", a: "Yes! Grading happens every few months and is one of the most rewarding parts of training. Kids love the recognition of working hard and progressing through the belt system." },
          { q: "Is there a free trial?", a: "Yes — book a free trial class with no obligation. Bring them along, see what they think, and take it from there. Most kids are asking to come back before they've even left the dojo." },
        ]}
        ctaHeading="This could be the best thing you've ever done for your child."
      />
    </>
  );
}
