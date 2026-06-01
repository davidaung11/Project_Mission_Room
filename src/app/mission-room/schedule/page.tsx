"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const dates = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

const mentors = [
  {
    name: "Sarah Jenkins",
    role: "Senior Product Designer @ Meta",
    rating: "4.9",
    tags: ["Portfolio", "UX Strategy"],
  },
  {
    name: "David Chen",
    role: "Lead Designer @ Stripe",
    rating: "5.0",
    tags: ["Visual Design", "Branding"],
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director @ Airbnb",
    rating: "4.8",
    tags: ["Presentation", "UI Design"],
  },
];

export default function SchedulePage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [selectedMentor, setSelectedMentor] = useState("David Chen");

  return (
    <div>
      <div className="mb-6">
        <p className="inline-flex rounded-full bg-[var(--mr-blue-soft)] px-3 py-1 text-[10px] font-semibold text-[var(--mr-blue)]">
          Step 4 & 5 of 6
        </p>

        <h1 className="mt-3 text-[26px] font-semibold tracking-[-0.03em] text-[#172033]">
          Schedule Portfolio Review
        </h1>

        <p className="mt-1 max-w-2xl text-[12px] leading-5 text-[var(--mr-muted)]">
          Fine-tune your presentation with a leading industry expert. Select your
          preferred slot and we’ll match you with the best available mentors.
        </p>
      </div>

      <div className="rounded-[20px] border border-[var(--mr-border)] bg-white/90 shadow-[var(--mr-shadow)]">
        <div className="grid lg:grid-cols-[1fr_360px]">
          <section className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[16px] font-semibold text-[#172033]">
                1. Select Date & Time
              </h2>

              <p className="text-[12px] font-semibold text-[#263445]">
                October 2024
              </p>
            </div>

            <div className="grid grid-cols-7 gap-3 text-center">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <p key={day} className="text-[10px] font-semibold text-[var(--mr-muted)]">
                  {day}
                </p>
              ))}

              {dates.map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => setSelectedDate(date)}
                  className={`rounded-full py-3 text-[12px] font-semibold ${
                    selectedDate === date
                      ? "bg-[var(--mr-blue)] text-white shadow-[0_10px_20px_rgba(11,93,204,0.2)]"
                      : "text-[#263445] hover:bg-[#f6faff]"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            <h3 className="mt-8 text-[12px] font-semibold uppercase tracking-wide text-[#263445]">
              Available Slots (Oct {selectedDate})
            </h3>

            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {times.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-[10px] border px-4 py-3 text-[12px] font-semibold ${
                    selectedTime === time
                      ? "border-[var(--mr-blue)] bg-[#eaf3ff] text-[var(--mr-blue)]"
                      : "border-[var(--mr-border)] bg-white text-[#263445] hover:bg-[#f6faff]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </section>

          <section className="border-l border-[var(--mr-border)] bg-[#f5f9ff] p-6">
            <h2 className="text-[16px] font-semibold text-[#172033]">
              2. Mentor Matching
            </h2>

            <p className="mt-1 text-[11px] text-[var(--mr-muted)]">
              We found 3 mentors for your selected time.
            </p>

            <div className="mt-5 space-y-3">
              {mentors.map((mentor) => {
                const selected = selectedMentor === mentor.name;

                return (
                  <button
                    key={mentor.name}
                    type="button"
                    onClick={() => setSelectedMentor(mentor.name)}
                    className={`w-full rounded-[14px] border bg-white p-4 text-left ${
                      selected
                        ? "border-[var(--mr-blue)] shadow-[0_12px_24px_rgba(11,93,204,0.12)]"
                        : "border-[var(--mr-border)]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[13px] font-semibold text-[#172033]">
                          {mentor.name}
                        </h3>
                        <p className="mt-1 text-[10px] text-[var(--mr-muted)]">
                          {mentor.role}
                        </p>
                      </div>

                      <span className="text-[11px] font-semibold text-[#10a66f]">
                        ★ {mentor.rating}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {mentor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#eef5ff] px-2 py-1 text-[9px] font-semibold text-[#3c5f8a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mt-3 rounded-[8px] py-2 text-center text-[11px] font-semibold ${
                        selected
                          ? "bg-[var(--mr-blue)] text-white"
                          : "border border-[var(--mr-blue)] text-[var(--mr-blue)]"
                      }`}
                    >
                      {selected ? "Selected" : `Choose ${mentor.name.split(" ")[0]}`}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[var(--mr-border)] pt-5">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-[12px] font-semibold text-[var(--mr-muted)]"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => router.push("/mission-room/payment")}
                className="rounded-[12px] bg-[var(--mr-blue)] px-5 py-3 text-[12px] font-semibold text-white"
              >
                Confirm Schedule
              </button>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-6 text-[10px] text-[var(--mr-muted)]">
        <span>Secure Payment & Scheduling</span>
        <span>Free rescheduling up to 24h</span>
      </div>
    </div>
  );
}