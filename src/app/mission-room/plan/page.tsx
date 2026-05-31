"use client";

import { getSavedMissions, saveMission } from "@/lib/mission-storage";
import { useRouter } from "next/navigation";

const steps = [
  "Mission Details",
  "Curriculum Selection",
  "Timeline & Setup",
  "Review & Launch",
];

const requirements = [
  {
    title: "Admission Requirements Review",
    detail:
      "Check required documents, English score, portfolio, and application timeline.",
    start: "01/09/2026",
    end: "15/09/2026",
    lessons: 3,
  },
  {
    title: "Portfolio & Essay Preparation",
    detail:
      "Prepare statement of purpose, activity record, and portfolio documents.",
    start: "16/09/2026",
    end: "30/09/2026",
    lessons: 2,
  },
  {
    title: "Interview Practice",
    detail:
      "Practice academic interview questions and program-specific answers.",
    start: "01/10/2026",
    end: "10/10/2026",
    lessons: 1,
  },
];

export default function PlanPage() {
  const router = useRouter();

  const handleGenerateFinalPlan = () => {
    const missions = getSavedMissions();
    const latestMission = missions[missions.length - 1];

    if (latestMission) {
      saveMission({
        ...latestMission,
        progress: 65,
        sessions: 4,
        tasks: 8,
      });
    }

    router.push("/mission-room");
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-[24px] font-semibold text-[#172033]">
          Plan Your Timeline
        </h1>
        <p className="mt-1 text-[12px] text-[#6e7f94]">
          Set up your study roadmap before generating the final plan.
        </p>
      </div>

      <div className="mb-5 rounded-[16px] border border-[#e8f1fb] bg-white/90 p-4">
        <div className="grid gap-3 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div
                className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                  index <= 2
                    ? "bg-[#0b5dcc] text-white"
                    : "bg-[#eef4fb] text-[#8a9aad]"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2 text-[11px] font-medium text-[#263445]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <div className="space-y-3">
          {requirements.map((item) => (
            <div
              key={item.title}
              className="rounded-[16px] border border-[#e8f1fb] bg-white/90 p-4"
            >
              <h2 className="text-[14px] font-semibold text-[#263445]">
                {item.title}
              </h2>

              <p className="mt-1 text-[11px] leading-5 text-[#6e7f94]">
                {item.detail}
              </p>

              <div className="mt-4 grid gap-2 md:grid-cols-3">
                <Info label="Start Date" value={item.start} />
                <Info label="End Date" value={item.end} />
                <Info label="Lessons / Week" value={String(item.lessons)} />
              </div>
            </div>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="rounded-[16px] bg-[#0b5dcc] p-4 text-white">
            <h2 className="text-[15px] font-semibold">Mission Overview</h2>

            <div className="mt-4 space-y-3 text-[12px] text-white/85">
              <p>Total Duration: 6 Weeks</p>
              <p>Weekly Load: 6 Lessons</p>
              <p>Estimated Completion: Oct 10, 2026</p>
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-between text-[11px]">
                <span>Setup Progress</span>
                <span>75%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/25">
                <div className="h-1.5 w-[75%] rounded-full bg-[#48e6b2]" />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGenerateFinalPlan}
            className="w-full rounded-[12px] bg-[#0b5dcc] py-3 text-[12px] font-semibold text-white"
          >
            Generate Final Plan →
          </button>
        </aside>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[12px] bg-[#f6faff] p-2.5">
      <p className="text-[9px] text-[#8a9aad]">{label}</p>
      <p className="mt-0.5 text-[11px] font-semibold text-[#263445]">
        {value}
      </p>
    </div>
  );
}