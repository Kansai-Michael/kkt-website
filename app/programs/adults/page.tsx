import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Karate Classes | Kansai Karate Tarragindi",
  description: "Adult karate classes in Tarragindi. Whether it's fitness, self-defence, or mental health — our classes are designed for the average person to see real results. Monday, Tuesday and Thursday evenings.",
  alternates: { canonical: "https://kansaikaratetarragindi.com.au/programs/adults" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikaratetarragindi.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Adult Karate Classes", "item": "https://kansaikaratetarragindi.com.au/programs/adults" }
  ]
};

export default function AdultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
        name="Adult Karate"
        slug="adults"
        heroImg="/images/adults.jpg"
        heroTitle="Adult Karate at Kansai Karate Tarragindi — Real Skills, Real Fitness"
        heroSubtitle="Adult Karate at Kansai Karate Tarragindi is a genuine full-body workout with real martial arts skills — built for real people, all fitness levels, no prior experience needed."
        benefitsTitle="Adult Karate Classes Build Benefits for Life"
        buildPhotos={[
          {
            img: "/images/adults-1.jpg",
            caption: "Curriculum",
            body: "Our classes were designed specifically for the average person. You'll build skills step by step, without having to be a superstar to see improvement. Stick with it and your abilities will soar.",
          },
          {
            img: "/images/adults-community.jpg",
            caption: "Community",
            body: "You'll be surrounded by peers striving towards the same goals you are, day in and day out. You'll build real friendships and be supported in your individual journey.",
          },
          {
            img: "/images/adults-physical.jpg",
            caption: "Physical Skills",
            body: "Adult Karate develops the physical skills most activities ignore — balance, body awareness, and movement precision. You'll carry these benefits into every area of your life.",
          },
        ]}
        benefitCards={[
          {
            img: "/images/adults-fitness.jpg",
            caption: "Fitness",
            body: "Adult Karate gives you a genuine full-body workout. You'll build strength and cardiovascular fitness in a way that's actually engaging — not grinding away on a machine.",
          },
          {
            img: "/images/adults-mentalhealth.jpg",
            caption: "Mental Health",
            body: "Now the science agrees: you must take time for your own mental health. Our classes help you clear your mind, accomplish your goals, and be more healthy — from the inside out.",
          },
          {
            img: "/images/adults-6.jpg",
            caption: "Self-Defence",
            body: "Learn practical self-defence skills that actually work. You'll finish every class feeling more capable and confident in your ability to protect yourself and your family.",
          },
        ]}
        parentsTitle="Programs Built for Real People"
        parentsFeatures={[
          {
            title: "Class Times",
            body: "Adult Karate class times work around real schedules — Monday, Tuesday and Thursday evenings. Whether you're coming straight from work or after the kids are in bed, we have a time for you.",
          },
          {
            title: "Community",
            body: "Our positive atmosphere is contagious. From the first class, you'll know you're in a place where you'll make meaningful, lasting friendships with people who share your commitment to self-improvement.",
          },
          {
            title: "Mental Health",
            body: "We've always known it, but now the science agrees: you must take time for your own mental health. Our classes help you clear your mind and be more healthy from the inside out.",
          },
          {
            title: "Physical Skills",
            body: "Adult Karate builds functional physical literacy that most gym routines ignore — balance, flexibility, and movement quality that reduce injury risk and improve quality of life well into your later years.",
          },
        ]}
        studentsTitle="Why Adults Love Kansai Karate Tarragindi"
        studentsFeatures={[
          {
            title: "No Experience Needed",
            body: "It doesn't matter if you've never trained before or haven't trained in decades. Our Adult Karate program is designed for real people — you'll fit right in from day one.",
          },
          {
            title: "A Real Challenge",
            body: "Adult Karate is genuinely challenging — in the best possible way. You'll be pushed to grow, and you'll feel the sense of achievement that comes with developing real skill.",
          },
          {
            title: "Feel Capable & Confident",
            body: "There's nothing like training in a martial art to build deep, lasting confidence. You'll carry that sense of capability into every area of your life.",
          },
          {
            title: "It's Worth Every Minute",
            body: "At Kansai Karate Tarragindi, we guarantee that when you walk out of class, it will have been 100% worth it, every single time. You'll feel it.",
          },
        ]}
        testimonials={[
          {
            text: "I've been training at Kansai Karate Tarragindi for about six months. I came in with no background in martial arts and wasn't sure what to expect — but the technique-focused approach is completely different from a gym. I'm learning something real, and the fitness gains have been a very welcome bonus.",
            author: "Adult Karate member, Tarragindi",
          },
          {
            text: "Fantastic dojo for the whole family! Wonderful atmosphere of support and friendly teachers. Highly recommended!",
            author: "Adult Karate member, Tarragindi",
          },
        ]}
        ctaHeading="This could be the best thing you've ever done for yourself."
      />
    </>
  );
}
