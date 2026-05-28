"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const programForms: Record<string, { label: string; iframe: string }> = {
  "little-lions": {
    label: "Little Lions (Ages 5–7)",
    iframe: "https://app.kihonsoft.au/book/tarragindi-first-lesson",
  },
  juniors: {
    label: "Juniors (Ages 8–12)",
    iframe: "https://app.kihonsoft.au/book/tarragindi-first-lesson",
  },
  teens: {
    label: "Teens Karate (Ages 13–17)",
    iframe: "https://app.kihonsoft.au/book/tarragindi-first-lesson",
  },
  adults: {
    label: "Adult Karate",
    iframe: "https://app.kihonsoft.au/book/tarragindi-first-lesson",
  },
};

const programKeys = Object.keys(programForms);

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("program") || "";
  const [selected, setSelected] = useState(preselected);

  const currentForm = selected ? programForms[selected] : null;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {!selected && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Which program are you interested in?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {programKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[#5B7DB1] hover:bg-blue-50 transition-colors font-semibold text-gray-700"
                >
                  {programForms[key].label}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentForm && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{currentForm.label}</h2>
              {selected && (
                <button onClick={() => setSelected("")} className="text-sm text-[#5B7DB1] hover:underline">
                  Change program
                </button>
              )}
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src={currentForm.iframe}
                width="100%"
                height="500"
                frameBorder="0"
                title={`${currentForm.label} contact form`}
                className="w-full"
              />
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">
              Entering your information will forward you to a page with up-to-date scheduling and registration details.
            </p>
            <p className="text-center text-gray-400 text-xs mt-1 italic">
              We will never sell or share your information for any reason, ever.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ContactForm() {
  return (
    <Suspense>
      <ContactFormInner />
    </Suspense>
  );
}
