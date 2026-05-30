import MissionCard from "@/components/mission-room/MissionCard";
import Link from "next/link";

const missionPrograms = [
  {
    title: "BBA Chula",
    program: "Bachelor of Business Administration (International Program)",
    progress: 25,
    sessions: 4,
    tasks: 8,
    logo: "/logo.png",
  },
  {
    title: "BALAC Chula",
    program: "Bachelor of Arts in Language and Culture",
    progress: 50,
    sessions: 6,
    tasks: 4,
    logo: "/logo.png",
  },
  {
    title: "JCC Chula",
    program: "Bachelor of Arts in Communication Management",
    progress: 5,
    sessions: 7,
    tasks: 3,
    logo: "/logo.png",
  },
];

export default function MissionWorkspacePage() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#3c3936]">
            Your Mission Workspace
          </h1>
          <p className="mt-1 text-[12px] text-[var(--mr-muted)]">
            Continue your active Chula mission plans.
          </p>
        </div>

        <Link
          href="/mission-room/missions"
          className="rounded-[12px] bg-[var(--mr-blue)] px-4 py-2.5 text-[12px] font-semibold text-white"
        >
          + Create New Mission
        </Link>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
        <div className="grid gap-4 md:grid-cols-3">
          {missionPrograms.map((program) => (
            <MissionCard key={program.title} {...program} />
          ))}
        </div>

        <aside className="rounded-[18px] border border-[var(--mr-border)] bg-[var(--mr-card)] p-4 shadow-[var(--mr-shadow)]">
          <h3 className="text-[15px] font-semibold text-[var(--mr-text)]">
            Upcoming Sessions
          </h3>

          <div className="mt-4 space-y-3">
            {["Interview Prep", "Portfolio Review"].map((item) => (
              <div key={item} className="rounded-[14px] bg-[#f5f9fd] p-3">
                <p className="text-[12px] font-semibold text-[var(--mr-text)]">
                  {item}
                </p>
                <p className="mt-1 text-[11px] text-[var(--mr-muted)]">
                  Tomorrow, 10:00 AM
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}