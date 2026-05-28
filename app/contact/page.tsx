import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Kansai Karate Tarragindi",
  description: "Get in touch with Kansai Karate Tarragindi. Classes at Wellers Hill Bowls Club, 34 Esher St, Tarragindi QLD 4121. Call 0480 566 172.",
  alternates: { canonical: "https://kansaikaratetarragindi.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Server-rendered — visible to Google */}
      <section className="bg-[#5B7DB1] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
            Get in Touch
          </h1>
          <p className="text-lg text-white/80">
            Book a free trial class or ask us anything about our programs.
          </p>
        </div>
      </section>

      {/* Interactive program selector — client-side */}
      <ContactForm />

      {/* Server-rendered NAP block */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-gray-600">
          <div>
            <p className="font-semibold text-[#5B7DB1] mb-1">Phone</p>
            <a href="tel:0480566172" className="hover:underline">0480 566 172</a>
          </div>
          <div>
            <p className="font-semibold text-[#5B7DB1] mb-1">Email</p>
            <a href="mailto:jason@kansaikaratetarragindi.com.au" className="hover:underline break-all">
              jason@kansaikaratetarragindi.com.au
            </a>
          </div>
          <div>
            <p className="font-semibold text-[#5B7DB1] mb-1">Location</p>
            <p>Wellers Hill Bowls Club<br />34 Esher St, Tarragindi QLD 4121</p>
          </div>
        </div>
      </section>
    </>
  );
}
