"use client";

const upcomingSessions = [
  {
    title: "Personal Statement Review",
    mentor: "James Wilson",
    date: "Monday, Oct 21",
    time: "4:00 PM",
  },
  {
    title: "SAT Math Strategy Deck",
    mentor: "Lin Zhao",
    date: "Thursday, Oct 31",
    time: "10:30 AM",
  },
  {
    title: "IELTS Writing Workshop",
    mentor: "Alex Thompson",
    date: "Saturday, Nov 02",
    time: "2:00 PM",
  },
  {
    title: "GMAT Quantitative Workshop",
    mentor: "Tanat Chai",
    date: "Tuesday, Nov 05",
    time: "6:00 PM",
  },
  {
    title: "Interview Simulation",
    mentor: "Pakin Vorakul",
    date: "Wednesday, Nov 06",
    time: "11:30 AM",
  },
];

const history = [
  {
    session: "CU-TEP Prep: Speaking",
    mentor: "Alex Thompson",
    date: "Oct 18, 2024",
    outcome: "Completed",
  },
  {
    session: "Initial Consultation",
    mentor: "Sarah Jenkins",
    date: "Oct 12, 2024",
    outcome: "Completed",
  },
];

export default function UpcomingSessionsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#172033]">
            Upcoming Sessions
          </h1>
          <p className="mt-1 text-[12px] text-[var(--mr-muted)]">
            Manage your advisor sessions and preparation meetings.
          </p>
        </div>

        <input
          placeholder="Find a session..."
          className="w-[260px] rounded-full border border-[var(--mr-border)] bg-white px-4 py-2.5 text-[12px] outline-none placeholder:text-[var(--mr-light-muted)]"
        />
      </div>

      <section className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#19a979]">
          Next Mission
        </p>

        <h2 className="mt-1 text-[20px] font-semibold text-[#172033]">
          Starting Soon
        </h2>

        <div className="mt-4 rounded-[20px] bg-[#211b86] p-6 text-white shadow-[0_18px_45px_rgba(33,27,134,0.2)]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#11c98b] px-3 py-1 text-[10px] font-semibold text-[#10251f]">
                  Tomorrow, Oct 21 · 2:30 PM
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold">
                  18 Hours
                </span>
              </div>

              <h3 className="text-[24px] font-semibold leading-tight">
                Mock Interview: <br />
                Chula BBA International
              </h3>

              <div className="mt-5 rounded-[14px] bg-white/15 p-3">
                <p className="text-[12px] font-semibold">Dr. Sarah Jenkins</p>
                <p className="mt-1 text-[10px] text-white/70">
                  Ivy League admission expert
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => alert("Meeting link will be available soon.")}
                className="rounded-[12px] bg-[#10b981] px-5 py-3 text-[12px] font-semibold text-white"
              >
                Join Meeting
              </button>

              <button
                type="button"
                onClick={() => alert("Reschedule feature will be added later.")}
                className="rounded-[12px] bg-white/15 px-5 py-3 text-[12px] font-semibold text-white"
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-[15px] font-semibold text-[#172033]">
          Queue for Next 7 Days
        </h2>

        <div className="grid gap-4 lg:grid-cols-2">
          {upcomingSessions.map((session) => (
            <div
              key={session.title}
              className="rounded-[18px] border border-[var(--mr-border)] bg-white/85 p-4 shadow-[var(--mr-shadow)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[13px] font-semibold text-[#172033]">
                    {session.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-[var(--mr-muted)]">
                    {session.date} · {session.time}
                  </p>
                </div>

                <button className="text-[18px] text-[var(--mr-muted)]">
                  ⋮
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium text-[#172033]">
                  {session.mentor}
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-full bg-[#f3f7ff] px-3 py-1.5 text-[10px] font-semibold text-[var(--mr-blue)]"
                  >
                    Reschedule
                  </button>

                  <button
                    type="button"
                    className="rounded-full bg-[#eef5ff] px-3 py-1.5 text-[10px] font-semibold text-[#172033]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-[#172033]">
            Session History
          </h2>

          <button className="text-[11px] font-semibold text-[var(--mr-blue)]">
            View All Archive
          </button>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[var(--mr-border)] bg-white/85 shadow-[var(--mr-shadow)]">
          <div className="grid grid-cols-4 bg-[#eef5ff] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--mr-muted)]">
            <p>Session Name</p>
            <p>Mentor</p>
            <p>Date</p>
            <p>Outcome</p>
          </div>

          {history.map((item) => (
            <div
              key={item.session}
              className="grid grid-cols-4 border-t border-[var(--mr-border)] px-4 py-3 text-[11px]"
            >
              <p className="font-semibold text-[#172033]">{item.session}</p>
              <p className="text-[var(--mr-muted)]">{item.mentor}</p>
              <p className="text-[var(--mr-muted)]">{item.date}</p>
              <p>
                <span className="rounded-full bg-[#e9fff6] px-2 py-1 text-[9px] font-semibold text-[#10a66f]">
                  {item.outcome}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}