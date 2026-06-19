import TimetablePage from "@/components/TimetablePage";
import type { MoreInfoContent } from "@/components/TimetablePage";

const BOOKING_URL = "https://app.kihonsoft.au/book/tarragindi-first-lesson";

export const metadata = { title: "Cubs Class Timetable | Kansai Karate Tarragindi" };

const moreInfo: MoreInfoContent = {
  shineHeading: "Are you ready for your little one to shine?",
  shineFeatures: [
    {
      title: "Listening Skills",
      body: "Following simple instructions is one of the most valuable skills a 3–4 year old can develop. Cubs classes make this fun and natural — children learn to listen, respond and follow through, building habits that set them up for school and life.",
    },
    {
      title: "Body Confidence",
      body: "Little ones discover what their bodies can do in a safe, encouraging space. Balance, coordination and spatial awareness all develop through age-appropriate karate movement — physical foundations that benefit children for life.",
    },
    {
      title: "Social Confidence",
      body: "Cubs is often one of the first group settings for young children. They learn to take turns, interact positively with peers, and build friendships — all within a structured, caring environment that makes them feel safe to try.",
    },
  ],
  dividerPhoto: "/images/cubs.jpg",
  classHeading: "What do kids do in Cubs classes?",
  classIntro: "Cubs classes are 30 minutes of structured fun. Here's what a typical session looks like for your little one:",
  classItems: [
    {
      title: "Warm Ups & Movement Games",
      body: "We get little bodies moving with fun, age-appropriate warm-up games. Running, jumping, stretching — all disguised as play so kids are energised and ready to learn.",
    },
    {
      title: "Listening Activities",
      body: "Simple follow-the-leader and instruction-based activities build the habit of listening and responding. Kids feel proud when they get it right — and they want to keep trying.",
    },
    {
      title: "Basic Karate Skills",
      body: "We introduce simple stances, movements and strikes in a way that 3–4 year olds can understand and enjoy. Nothing overwhelming — just little wins that build confidence.",
    },
    {
      title: "Partner & Group Activities",
      body: "Short partner activities and group games teach little ones how to interact positively with other children — taking turns, encouraging each other and working together.",
    },
  ],
  classPhoto: "/images/cubs-class.jpg",
  faqs: [
    {
      q: "Can we try it before signing up?",
      a: "Yes! We offer a free first lesson with no obligation. Book using the calendar above and bring your little one along — you'll see within the first few minutes whether it's a good fit.",
    },
    {
      q: "If we like it, how do we sign up?",
      a: "After the trial, if your child loves it (and they usually do!), we'll walk you through getting started. Sensei Jason will reach out before the trial to make sure you know exactly what to expect.",
    },
    {
      q: "How many classes do we attend?",
      a: "Cubs classes run Monday and Thursday afternoons. Once a week is a great starting point — many families find their little one quickly wants to come twice a week once they settle in.",
    },
  ],
  closingStatement:
    "Cubs is the perfect first step — a gentle, fun, confidence-building program your little one will look forward to every single week.",
};

export default function CubsTimetable() {
  return (
    <TimetablePage
      name="Cubs"
      slug="cubs"
      heroImg="/images/cubs.jpg"
      headline="Your little one's first karate adventure starts here!"
      subheadline="Cubs is for ages 3–4. Book a FREE First Lesson and discover what your child is capable of."
      scheduleRows={[
        {
          label: "CUBS",
          sublabel: "3 - 4 YEARS",
          mon: "4:30 – 5:00pm",
          thu: "4:15 – 4:45pm",
          sat: "Coming Soon",
        },
      ]}
      scheduleNote="* Cubs Classes start Monday 13th July 2026"
      bookingIframeUrl={BOOKING_URL}
      moreInfo={moreInfo}
    />
  );
}
