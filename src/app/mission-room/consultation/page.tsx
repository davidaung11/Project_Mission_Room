"use client";

import { CheckCircle, Phone } from "lucide-react";
import { useMemo, useState } from "react";

const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const times = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

export default function ConsultationPage() {
  const [selectedDate, setSelectedDate] = useState(6);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [booked, setBooked] = useState(false);

  const endTime = useMemo(() => {
    const [time, period] = selectedTime.split(" ");
    const [hour, minute] = time.split(":").map(Number);

    let h = hour;
    if (period === "PM" && hour !== 12) h += 12;
    if (period === "AM" && hour === 12) h = 0;

    const date = new Date(2026, 8, selectedDate, h, minute);
    date.setMinutes(date.getMinutes() + 15);

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [selectedTime, selectedDate]);

  return (
    <div>
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <p className="text-[11px] font-semibold text-[#1f6fd1]">
          Mentors › Consultation
        </p>

        <h1 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#172033]">
          Book Your Free Consultation
        </h1>

        <p className="mt-2 text-[12px] leading-5 text-[#6e7f94]">
          Connect with a dedicated academic advisor to map out your educational
          trajectory. Our 15-minute high-impact sessions are designed to clarify
          goals and identify immediate growth opportunities.
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between rounded-[14px] bg-[#48e6b2] px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0d7c5c]" />
          <div>
            <p className="text-[12px] font-semibold text-[#12332b]">
              Advisors are online now
            </p>
            <p className="text-[10px] text-[#216253]">
              Average wait time: &lt; 2 minutes. Need instant guidance?
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert("Live queue will be connected later.")}
          className="flex items-center gap-2 rounded-[10px] bg-[#0f3f38] px-4 py-2 text-[11px] font-semibold text-white"
        >
          <Phone size={13} />
          Join Live Queue
        </button>
      </div>

      <div className="rounded-[18px] border border-[#e8f1fb] bg-white/90 p-5">
        <div className="grid gap-6 lg:grid-cols-2">
          <section>
            <h2 className="text-[14px] font-semibold text-[#263445]">
              1. Select Date
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-[12px] font-semibold text-[#263445]">
                September 2026
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous month"
                  className="h-8 w-8 rounded-[10px] border border-[#dfeaf5] text-[12px]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next month"
                  className="h-8 w-8 rounded-[10px] border border-[#dfeaf5] text-[12px]"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-7 gap-2 text-center text-[11px]">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <span key={`${day}-${index}`} className="font-medium text-[#8a9aad]">
                  {day}
                </span>
              ))}

              {dates.map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => {
                    setSelectedDate(date);
                    setBooked(false);
                  }}
                  className={`rounded-[10px] py-2 text-[11px] font-medium ${
                    selectedDate === date
                      ? "border border-[#0b5dcc] bg-[#eaf3ff] text-[#0b5dcc]"
                      : "text-[#263445] hover:bg-[#f6faff]"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </section>

          <section className="border-l border-[#e8f1fb] pl-6">
            <h2 className="text-[14px] font-semibold text-[#263445]">
              2. Select Time
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => {
                    setSelectedTime(time);
                    setBooked(false);
                  }}
                  className={`rounded-[10px] border px-3 py-2 text-[11px] font-semibold ${
                    selectedTime === time
                      ? "border-[#0b5dcc] bg-[#0b5dcc] text-white"
                      : "border-[#dfeaf5] bg-white text-[#263445] hover:bg-[#f6faff]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <p className="mt-4 text-[10px] text-[#6e7f94]">
              Timezone: Bangkok Time (UTC +7)
            </p>
          </section>
        </div>

        <div className="mt-6 border-t border-[#e8f1fb] pt-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#6e7f94]">
                Session Highlights
              </p>

              <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-[#263445]">
                <span>✓ 15-min discovery</span>
                <span>✓ Roadmap review</span>
                <span>✓ Expert Q&amp;A</span>
              </div>
            </div>

            <div className="rounded-[14px] bg-[#f4f8ff] p-3">
              <p className="text-[12px] font-semibold text-[#263445]">
                Friday, Sep {selectedDate}
              </p>
              <p className="text-[10px] text-[#6e7f94]">
                {selectedTime} – {endTime}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setBooked(true)}
              className="rounded-[12px] bg-[#0b5dcc] px-6 py-3 text-[12px] font-semibold text-white"
            >
              Confirm Booking
            </button>
          </div>

          {booked && (
            <div className="mt-4 rounded-[12px] border border-[#c8f3df] bg-[#f0fff8] p-3 text-[12px] font-medium text-[#17664b]">
              Booking confirmed for Sep {selectedDate} at {selectedTime}.
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 rounded-[16px] border border-dashed border-[#cddced] bg-[#f4f8ff] p-5">
        <p className="text-[11px] font-semibold uppercase text-[#1f6fd1]">
          Post-session Roadmap Preview
        </p>

        <div className="relative mt-7 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-3 hidden h-px bg-[#cddced] md:block" />

          <Step number="1" title="Needs Assessment" detail="Define academic hurdles" active />
          <Step number="2" title="Goal Mapping" detail="Set 90-day targets" />
          <Step number="3" title="Expert Pairing" detail="Curate your team" />
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  detail,
  active = false,
}: {
  number: string;
  title: string;
  detail: string;
  active?: boolean;
}) {
  return (
    <div className="relative text-center">
      <div
        className={`relative z-10 mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
          active
            ? "bg-[#0b5dcc] text-white"
            : "bg-[#dfe8f5] text-[#7f8fa3]"
        }`}
      >
        {active ? <CheckCircle size={14} /> : number}
      </div>

      <p className="mt-2 text-[11px] font-semibold text-[#263445]">{title}</p>
      <p className="text-[10px] text-[#6e7f94]">{detail}</p>
    </div>
  );
}