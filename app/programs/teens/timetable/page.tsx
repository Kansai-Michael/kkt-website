import TimetablePage from "@/components/TimetablePage";
import type { MoreInfoContent } from "@/components/TimetablePage";

const BOOKING_URL = "https://app.kihonsoft.au/book/tarragindi-first-lesson";

export const metadata = { title: "Teens Karate Class Timetable | Kansai Karate Tarragindi" };

const moreInfo: MoreInfoContent = {
  shineHeading: "Are you ready for your teenager to shine?",
  shineFeatures: [
    {
      title: "Self Esteem",
      body: "It's impossible for your teen to try new things and not have challenges. But at Teen Karate, we give them challenges on purpose. As they slowly overcome these challenges, their self esteem solidifies, becoming a rock solid foundation of their lives.",
    },
    {
      title: "Team Work",
      body: "Learning to interact with others and work towards a common goal is extremely important, and teenagers in Teen Karate do exactly that! Working together with peers helps teens cultivate interpersonal skills that will benefit them for life!",
    },
    {
      title: "Leadership",
      body: "Not only will your teenager be surrounded by positive leadership examples in class, as they advance they'll get opportunities to be in leadership positions of their own if they choose. They'll learn firsthand how to be a positive example in their own lives!",
    },
  ],
  dividerPhoto: "/images/dojo-class.jpg",
  classHeading: "What do teens do in Teen Karate classes?",
  classIntro: "Most parents understand typical teen activities. But Teen Karate classes at Kansai Karate Tarragindi are something genuinely different — structured, energetic, and rewarding.",
  classItems: [
    {
      title: "Warm Ups & Stretching",
      body: "We don't just stretch to prevent injury, we stretch to increase performance, flexibility, strength and overall muscle capacity. You might not know it, but teens love to stretch, especially when they can see the results!",
    },
    {
      title: "Skill Work",
      body: "Your teen will be creating deep connections between their mind and body as they learn new, amazing skills. Not just cool karate moves, but foundational movement skills that will help them realize their full physical potential.",
    },
    {
      title: "Disguising Repetition",
      body: "Teen Karate members take their new skills to \"real work\" application by executing (super fun) technique drills that help embed the learning into their muscle memory.",
    },
    {
      title: "Partner and Team Work",
      body: "Students are often given challenges and drills to complete with partners and larger teams. This creates an opportunity for them to learn to interact positively with others, effectively communicate their ideas, and be pushed by their teams to do their absolute best.",
    },
  ],
  classPhoto: "/images/teens.jpg",
  classPhotoPosition: "top",
  faqs: [
    {
      q: "Can we try it before signing up?",
      a: "Yes! Our trial offers and available spaces are updated on this page regularly. Just click one of the buttons on this page to see available spaces.",
    },
    {
      q: "If we like it, how do we sign up?",
      a: "After your teen's trial, we'll all know if it was the right activity for them. If it is, we'll walk you through getting started at Kansai Karate Tarragindi. If you have questions, don't worry — we'll reach out before the trial to be sure you're 100% ready!",
    },
    {
      q: "How many classes do we attend?",
      a: "Teens classes run Monday, Tuesday and Thursday evenings. Many teens are successful with as little as once or twice a week. If they love classes, we likely have options to attend more!",
    },
  ],
  closingStatement:
    "Teen Karate is the character enriching, healthy life building, super fun program every parent wishes their teenager could have.",
};

export default function TeensTimetable() {
  return (
    <TimetablePage
      name="Teens Karate"
      slug="teens"
      heroImg="/images/dojo-class.jpg"
      headline="Build fitness, focus, and real self-defence skills!"
      subheadline="Teens Karate is for ages 13–17. Book a FREE First Lesson and discover what you're capable of."
      scheduleRows={[
        {
          label: "TEENS",
          sublabel: "13 - 17 YEARS",
          mon: "5:15 – 6:15pm",
          tue: "5:45 – 6:30pm",
          wed: "Coming Soon",
          thu: "5:45 – 6:30pm",
          sat: "Coming Soon",
        },
      ]}
      bookingIframeUrl={BOOKING_URL}
      moreInfo={moreInfo}
    />
  );
}
