import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cubs Program (Ages 3–4) | Kansai Karate Tarragindi",
  description: "Karate classes for 3 and 4 year olds in Tarragindi. Cubs is a gentle, fun introduction to movement, listening and confidence. Monday and Thursday afternoons.",
  alternates: { canonical: "https://kansaikaratetarragindi.com.au/programs/cubs" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is my 3 year old ready for karate?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Cubs is designed specifically for 3 and 4 year olds. Our instructors understand this age group — short attention spans, boundless energy and all. Classes are fun, gentle and structured to match where little ones are developmentally." } },
    { "@type": "Question", "name": "What will my child learn in Cubs?", "acceptedAnswer": { "@type": "Answer", "text": "Listening skills, following instructions, basic movement and coordination, body awareness, and how to take turns and interact positively with other children. We sneak in karate skills along the way!" } },
    { "@type": "Question", "name": "How long are the classes?", "acceptedAnswer": { "@type": "Answer", "text": "Cubs classes run for 30 minutes — just right for little ones aged 3–4. We pack in a lot of fun, movement and learning in a short, focused session." } },
    { "@type": "Question", "name": "Do they need to know anything before starting?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not. No experience, no uniform, no equipment needed for your first class. Just bring your child in comfortable clothes and let us take it from there." } },
    { "@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we offer a free trial class with no obligation. Book online and bring your little one along. You'll know within the first five minutes if it's the right fit." } },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikaratetarragindi.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Cubs Karate (Ages 3–4)", "item": "https://kansaikaratetarragindi.com.au/programs/cubs" },
  ],
};

export default function CubsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
        name="Cubs"
        slug="cubs"
        heroImg="/images/cubs.jpg"
        heroTitle="Cubs Classes at Kansai Karate Tarragindi — your child's first big adventure!"
        heroSubtitle="Cubs is our program for little ones aged 3–4. Short, fun classes that build listening skills, body awareness and confidence from the very first session."
        benefitsTitle="Cubs Classes Build a Foundation for Life"
        buildPhotos={[
          {
            img: "/images/cubs-1.jpg",
            caption: "Listening & Focus",
            objectPosition: "center 75%",
            body: "At 3–4 years old, learning to listen and follow instructions is one of the most important skills a child can develop. Cubs classes make it fun — so they don't even notice they're learning.",
          },
          {
            img: "/images/cubs-2.jpg",
            caption: "Body Confidence",
            objectPosition: "center 25%",
            body: "Little ones discover what their bodies can do in a safe, encouraging environment. Balance, coordination and physical awareness all grow naturally through play-based karate activities.",
          },
          {
            img: "/images/cubs-3.jpg",
            caption: "Social Skills",
            body: "Cubs learn to take turns, work alongside other children and interact positively in a group. These early social foundations carry forward into preschool, school and beyond.",
          },
        ]}
        benefitCards={[
          {
            img: "/images/cubs-4.jpg",
            caption: "Listening",
            body: "Cubs learn to listen and respond to simple instructions — a skill that transfers directly into preschool and school readiness. Our instructors make it engaging so kids actually want to pay attention.",
          },
          {
            img: "/images/cubs-5.jpg",
            caption: "Coordination",
            body: "Short, structured movement activities develop gross motor skills at exactly the right age. Little ones build spatial awareness, balance and basic coordination through karate fundamentals.",
          },
          {
            img: "/images/cubs-6.jpg",
            caption: "Confidence",
            body: "Every class is a win. Cubs classes are designed so children experience success and encouragement constantly — building confidence that shows up at home, in childcare and everywhere else.",
          },
        ]}
        parentsTitle="Parents Love Cubs"
        parentsFeatures={[
          {
            title: "Class Times",
            body: "Cubs classes run Monday 4:30–5:00pm and Thursday 4:15–4:45pm — short 30-minute sessions designed for little ones. Easy to fit into your week, and over before the afternoon rush.",
          },
          {
            title: "Safe Environment",
            body: "Our dojo is a structured, caring space where 3 and 4 year olds feel safe to try new things. Sensei Jason and the team are experienced with this age group and know how to get the best out of little ones.",
          },
          {
            title: "School Readiness",
            body: "Cubs is one of the best things you can do to prepare your child for school. Following instructions, sitting still when needed, taking turns and interacting with peers — we cover it all.",
          },
          {
            title: "Active & Healthy",
            body: "At 3–4 years old, structured physical activity builds gross motor foundations that benefit children for life. Cubs classes give little ones a healthy outlet for their energy in a purposeful way.",
          },
        ]}
        studentsTitle="Kids Love Cubs Classes"
        studentsFeatures={[
          {
            title: "Super Fun",
            body: "Cubs classes are designed to feel like play — because at this age, play is learning. Little ones have a blast every session while quietly building skills they'll carry for life.",
          },
          {
            title: "Just Their Size",
            body: "Everything in Cubs is tailored to 3 and 4 year olds — the class length, the activities, the instructions and the pace. Nothing is too hard, too long or too overwhelming.",
          },
          {
            title: "They Belong",
            body: "The dojo culture at Kansai Karate Tarragindi is warm and inclusive. Every child is welcomed, celebrated and encouraged — especially the tiniest ones finding their feet.",
          },
          {
            title: "New Friends",
            body: "Cubs classes are full of little ones the same age, sharing the same experience. Friendships form quickly and kids love having their dojo mates to look forward to each week.",
          },
        ]}
        testimonials={[
          {
            text: "My daughter started Cubs at 3 and the change in her confidence and listening has been incredible. The instructors are so patient and warm — she absolutely loves it.",
            author: "Cubs parent, Tarragindi",
          },
          {
            text: "I wasn't sure if my son was old enough but from the very first class he was engaged and happy. Best decision we made — he asks to go every week!",
            author: "Cubs parent, Tarragindi",
          },
        ]}
        faqs={[
          { q: "Is my 3 year old ready for karate?", a: "Yes! Cubs is designed specifically for 3 and 4 year olds. Our instructors understand this age group — short attention spans, boundless energy and all. Classes are fun, gentle and structured to match where little ones are developmentally." },
          { q: "What will my child learn in Cubs?", a: "Listening skills, following instructions, basic movement and coordination, body awareness, and how to take turns and interact positively with other children. We sneak in karate skills along the way!" },
          { q: "How long are the classes?", a: "Cubs classes run for 30 minutes — just right for little ones aged 3–4. We pack in a lot of fun, movement and learning in a short, focused session." },
          { q: "Do they need to know anything before starting?", a: "Absolutely not. No experience, no uniform, no equipment needed for your first class. Just bring your child in comfortable clothes and let us take it from there." },
          { q: "Is there a free trial?", a: "Yes — we offer a free trial class with no obligation. Book online and bring your little one along. You'll know within the first five minutes if it's the right fit." },
        ]}
        ctaHeading="Give your little one the best possible start."
      />
    </>
  );
}
