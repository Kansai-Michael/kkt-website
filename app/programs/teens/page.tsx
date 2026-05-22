import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teens Karate (Ages 13–17) | Kansai Karate Tarragindi",
  description: "Teen karate classes in Tarragindi. Build fitness, focus, and real self-defence skills in a structured class designed specifically for teenagers. Monday, Tuesday and Thursday.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikaratetarragindi.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Teens Karate (Ages 13–17)", "item": "https://kansaikaratetarragindi.com.au/programs/teens" }
  ]
};

export default function TeensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
        name="Teens Karate"
        slug="teens"
        heroImg="/images/teens-hero.jpg"
        heroTitle="Teen Karate at Kansai Karate Tarragindi — classes designed just for them"
        heroSubtitle="Karate is the perfect activity for teenagers. It gives them an outlet for their unique energy in a structured class designed and taught just for them — not lumped in with little kids or adults."
        benefitsTitle="Teen Karate Classes Build Benefits for Life"
        buildPhotos={[
          {
            img: "/images/teens-1.jpg",
            caption: "Fitness & Strength",
            body: "Teen Karate builds real, functional fitness in a way that's actually engaging. Classes run Monday, Tuesday and Thursday evenings — fitting around school and social schedules.",
          },
          {
            img: "/images/teens-2.jpg",
            caption: "Focus & Discipline",
            body: "The mental discipline built in Teen Karate shows up everywhere — at school, at home, and in sport. Parents regularly tell us the change in their teen is noticeable within weeks.",
          },
          {
            img: "/images/teens-3.jpg",
            caption: "Self-Defence",
            body: "Practical self-defence skills that teens can actually use. Knowing how to protect themselves builds a quiet, deep confidence that carries through everything they do.",
          },
        ]}
        benefitCards={[
          {
            img: "/images/teens-4.jpg",
            caption: "Confidence",
            body: "Teen Karate builds the kind of deep, unshakeable confidence that teenagers carry everywhere they go. Real confidence built through real achievement — not empty praise.",
          },
          {
            img: "/images/teens-determination.jpg",
            caption: "Determination",
            body: "Teens need a safe, structured place to learn to overcome real challenges and build genuine grit. Karate provides exactly that kind of growth environment.",
          },
          {
            img: "/images/teens-6.jpg",
            caption: "Mental Health",
            body: "A physical outlet that helps manage stress, anxiety, and the pressures of teenage life. Clear your head, challenge your body — Teen Karate is one of the best mental health tools available.",
          },
        ]}
        parentsTitle="Parents Love Teen Karate"
        parentsFeatures={[
          {
            title: "Class Times",
            body: "Teen Karate class times work around school schedules — Monday, Tuesday and Thursday evenings. You're almost guaranteed to find a time that works for your family.",
          },
          {
            title: "Community",
            body: "Teens will be surrounded by peers their own age, all striving towards the same goals. They'll build genuine friendships built on mutual respect and shared challenge.",
          },
          {
            title: "Life Skills",
            body: "Karate teaches teenagers persistence, respect and empathy through direct experience — life skills that carry over into school, work and relationships.",
          },
          {
            title: "Physical Skills",
            body: "It's more than kicks and punches — it's proprioception, balance, agility and coordination. Physical traits built through Teen Karate that stay with your child for life.",
          },
        ]}
        studentsTitle="Teens Love Karate Classes"
        studentsFeatures={[
          {
            title: "Designed Just for Them",
            body: "Not lumped in with little kids. Not thrown in with adults. A class specifically for teenagers — with the right energy level, right content, and right pace.",
          },
          {
            title: "Real Self-Defence",
            body: "Teens love learning practical skills they can actually use. Knowing they can protect themselves gives them a quiet, lasting confidence nothing else can match.",
          },
          {
            title: "It's Actually Cool",
            body: "Karate has a real image problem with some teens — until they try it. Within weeks they're talking about it to their friends and genuinely looking forward to every class.",
          },
          {
            title: "They Have FUN!",
            body: "We're passionate instructors who love what we do, and that shows through every class. Teen Karate at Kansai Karate Tarragindi is genuinely one of the most enjoyable activities around.",
          },
        ]}
        testimonials={[
          {
            text: "The senseis are incredible — they're really engaging, fun, and they make sure students feel comfortable while building their confidence.",
            author: "Teen Karate parent, Tarragindi",
          },
          {
            text: "Fantastic dojo for the whole family! Wonderful atmosphere of support and friendly teachers. Highly recommended!",
            author: "Teen Karate parent, Tarragindi",
          },
        ]}
        faqs={[
          { q: "My teenager thinks karate is for little kids — how do I convince them?", a: "Let them try it. Teen Karate at Kansai is a completely different environment from a kids' class — fast-paced, physically demanding, and specifically designed for teenagers. Almost every teen who tries it comes back." },
          { q: "What will they actually learn?", a: "Traditional Shitoryu Shukokai karate — real strikes, blocks, kata, and controlled sparring — alongside focus, discipline, and practical self-defence. Skills they'll carry into adulthood." },
          { q: "How often should they train?", a: "Two or three times a week is ideal. Classes run Monday, Tuesday and Thursday evenings, making it easy to fit around school, sport, and social commitments." },
          { q: "Is it safe?", a: "Yes. All contact drills are controlled, supervised, and age-appropriate. Our instructors are trained to create an environment that challenges teens without putting them at risk." },
          { q: "Is there a free trial?", a: "Yes — book a free trial class, no commitment required. Let them give it an honest go. We're confident they'll want to come back." },
        ]}
        ctaHeading="This could be the best thing you've ever done for your teenager."
      />
    </>
  );
}
