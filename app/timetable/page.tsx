import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Timetable | Kansai Karate Tarragindi",
  description: "Class schedule for Kansai Karate Tarragindi. Monday, Tuesday and Thursday afternoons and evenings. View the timetable and book your spot.",
};

const BOOKING_URL = "https://app.kihonsoft.au/book/tarragindi-first-lesson";

export default function TimetablePage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Timetable</h1>
          <p className="text-xl text-white/80">
            Classes run Monday, Tuesday and Thursday afternoons and evenings. Find a time that fits your family.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Timetable */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#003087] mb-6">Weekly Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#003087] text-white">
                    <th className="p-3 text-left">Class</th>
                    <th className="p-3 text-left">Monday</th>
                    <th className="p-3 text-left">Tuesday</th>
                    <th className="p-3 text-left">Thursday</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { program: "Cubs (3–4 yrs)", mon: "4:00–4:30pm", tue: "—", thu: "4:15–4:45pm" },
                    { program: "Little Lions (5–6 yrs)", mon: "4:30–5:15pm", tue: "4:15–5:00pm", thu: "4:45–5:30pm" },
                    { program: "Juniors (7–12 yrs)", mon: "5:15–6:00pm", tue: "5:00–5:45pm", thu: "5:30–6:15pm" },
                    { program: "Juniors, Teens & Adults (combined)", mon: "—", tue: "—", thu: "6:15–7:00pm" },
                    { program: "Teens & Adults (13+)", mon: "6:00–6:45pm", tue: "5:45–6:30pm", thu: "7:00–7:45pm" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 font-medium text-[#003087]">{row.program}</td>
                      <td className="p-3 text-gray-600">{row.mon}</td>
                      <td className="p-3 text-gray-600">{row.tue}</td>
                      <td className="p-3 text-gray-600">{row.thu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              This timetable applies from Monday 2 November 2026. Timetable subject to change. Check with Sensei Jason for holiday schedules.
            </p>
          </div>

          {/* Kihon booking embed */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-2">Book Your First Class</h2>
            <p className="text-gray-500 text-sm mb-6">
              Select your program, choose a day and time that suits you, then fill in your details to complete your booking.
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src={BOOKING_URL}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book your first class at Kansai Karate Tarragindi"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
