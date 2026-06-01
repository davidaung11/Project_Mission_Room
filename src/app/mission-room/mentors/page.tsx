"use client";

import {
  CalendarDays,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  FolderOpen,
  MessageSquare,
  Plus,
  Star,
  Target,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mentors = [
  {
    name: "Sarah Jenkins",
    role: "Senior Admission Advisor",
    rating: "4.9",
    tags: ["Interview", "Portfolio"],
  },
  {
    name: "David",
    role: "Lead Mentor",
    rating: "5.0",
    tags: ["Strategy", "Branding"],
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Engineering Mentor",
    rating: "4.8",
    tags: ["Technical", "Presentation"],
  },
];

const modules = [
  {
    title: "Interview",
    percent: "15%",
    detail: "Core behavioral and technical communication",
    icon: MessageSquare,
    classes: [
      { title: "Personal Branding & Narrative", status: "Completed 2d ago" },
      { title: "Mock Technical Interview #1", status: "Schedule" },
    ],
  },
 {
  title: "Portfolio",
  percent: "20%",
  detail: "Showcasing projects and engineering depth",
  icon: FolderOpen,
  classes: [
    { title: "Portfolio Structure Review", status: "Schedule" },
    { title: "Project Presentation Material", status: "Schedule" },
  ],
},
  {
    title: "Technical Assessment",
    percent: "30%",
    detail: "Algorithms, data structures, and systems",
    icon: Target,
    classes: [{ title: "Assessment Practice Session", status: "Schedule" }],
  },
];

export default function MentorDiscoveryPage() {
  const router = useRouter();
  const [openModule, setOpenModule] = useState("Interview");
  const [selectedMentor, setSelectedMentor] = useState("David");

  const handleSchedule = (classTitle: string) => {
    const params = new URLSearchParams({
      mentor: selectedMentor,
      session: classTitle,
    });

    router.push(`/mission-room/schedule?${params.toString()}`);
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#172033]">
            Mentor Discovery
          </h1>
          <p className="mt-1 text-[12px] text-[var(--mr-muted)]">
            Review your mission requirements, choose a mentor, and schedule the
            next support session.
          </p>
        </div>

        <Link
          href="/mission-room/sessions"
          className="rounded-[12px] border border-[var(--mr-border)] bg-white px-4 py-2 text-[11px] font-semibold text-[var(--mr-blue)]"
        >
          View Upcoming Sessions
        </Link>
      </div>

      <section className="mb-5 overflow-hidden rounded-[20px] bg-[#172033] p-6 text-white shadow-[0_18px_45px_rgba(15,32,51,0.18)]">
        <div className="max-w-xl">
          <span className="rounded-full bg-[var(--mr-blue)] px-3 py-1 text-[10px] font-semibold">
            Mission Active
          </span>

          <h2 className="mt-4 text-[26px] font-semibold leading-tight">
            CS - Bachelor of Science
          </h2>

          <p className="mt-2 text-[12px] text-white/75">
            Path to Software Engineering Excellence
          </p>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[16px] font-semibold text-[var(--mr-blue)]">
              Curriculum Modules
            </h2>

            <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-[10px] font-semibold text-[#3c5f8a]">
              45% Complete
            </span>
          </div>

          <div className="space-y-3">
            {modules.map((module) => {
              const Icon = module.icon;
              const isOpen = openModule === module.title;

              return (
                <div
                  key={module.title}
                  className="rounded-[18px] border border-[var(--mr-border)] bg-white/90 shadow-[var(--mr-shadow)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenModule(isOpen ? "" : module.title)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#eef5ff] text-[var(--mr-blue)]">
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="text-[15px] font-semibold text-[#263445]">
                          {module.title} ({module.percent})
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[var(--mr-muted)]">
                          {module.detail}
                        </p>
                      </div>
                    </div>

                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {isOpen && (
                    <div className="space-y-4 border-t border-[var(--mr-border)] p-4">
                      {module.classes.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[14px] border border-[var(--mr-border)] bg-white p-4"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <CheckCircle size={15} className="text-[#10a66f]" />
                              <span className="text-[12px] font-medium text-[#263445]">
                                {item.title}
                              </span>
                            </div>

                            {item.status !== "Schedule" && (
                              <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-[10px] font-semibold text-[var(--mr-blue)]">
                                {item.status}
                              </span>
                            )}
                          </div>

                          {item.status === "Schedule" && (
                            <div className="mt-4 rounded-[14px] bg-[#f8fbff] p-3">
                              <p className="text-[11px] font-semibold text-[#263445]">
                                Choose a mentor for this session
                              </p>

                              <div className="mt-3 grid gap-2 md:grid-cols-3">
                                {mentors.map((mentor) => {
                                  const selected =
                                    selectedMentor === mentor.name;

                                  return (
                                    <button
                                      key={mentor.name}
                                      type="button"
                                      onClick={() =>
                                        setSelectedMentor(mentor.name)
                                      }
                                      className={`rounded-[12px] border bg-white p-3 text-left transition ${
                                        selected
                                          ? "border-[var(--mr-blue)] shadow-[0_10px_24px_rgba(11,93,204,0.12)]"
                                          : "border-[var(--mr-border)] hover:border-[#bcd8f6]"
                                      }`}
                                    >
                                      <div className="flex items-center justify-between gap-2">
                                        <p className="text-[11px] font-semibold text-[#172033]">
                                          {mentor.name}
                                        </p>
                                        <span className="flex items-center gap-1 text-[10px] font-semibold text-[#10a66f]">
                                          <Star size={11} fill="currentColor" />
                                          {mentor.rating}
                                        </span>
                                      </div>

                                      <p className="mt-1 text-[9px] leading-4 text-[var(--mr-muted)]">
                                        {mentor.role}
                                      </p>

                                      <div className="mt-2 flex flex-wrap gap-1">
                                        {mentor.tags.map((tag) => (
                                          <span
                                            key={tag}
                                            className="rounded-full bg-[#eef5ff] px-2 py-0.5 text-[8px] font-semibold text-[#3c5f8a]"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>

                                      <div
                                        className={`mt-3 rounded-[8px] py-1.5 text-center text-[9px] font-semibold ${
                                          selected
                                            ? "bg-[var(--mr-blue)] text-white"
                                            : "border border-[var(--mr-blue)] text-[var(--mr-blue)]"
                                        }`}
                                      >
                                        {selected ? "Selected" : "Choose"}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>

                              <button
                                type="button"
                                onClick={() => handleSchedule(item.title)}
                                className="mt-3 w-full rounded-[12px] bg-[var(--mr-blue)] px-4 py-2.5 text-[11px] font-semibold text-white"
                              >
                                Schedule with {selectedMentor}
                              </button>
                            </div>
                          )}
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() =>
                          alert("Add class modal will be added later.")
                        }
                        className="flex w-full items-center justify-center gap-2 rounded-[12px] border border-dashed border-[var(--mr-border)] bg-[#f8fbff] px-3 py-3 text-[11px] font-semibold text-[var(--mr-blue)]"
                      >
                        <Plus size={14} />
                        Add Class
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-[18px] border border-[var(--mr-border)] bg-white/90 p-4 shadow-[var(--mr-shadow)]">
            <h3 className="text-[15px] font-semibold text-[var(--mr-blue)]">
              Mission Milestones
            </h3>

            <div className="mt-4 space-y-4">
              <Milestone active title="Enrollment Verified" label="Goal 01" />
              <Milestone active title="First Mentor Sync" label="Goal 02" />
              <Milestone title="Module Assessment" label="Goal 03" />
            </div>
          </div>

          <div className="rounded-[18px] border border-[var(--mr-border)] bg-[#eef5ff] p-4 shadow-[var(--mr-shadow)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--mr-blue)]">
              Selected Mentor
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#172033] text-white">
                <UserRound size={18} />
              </div>

              <div>
                <h3 className="text-[13px] font-semibold text-[#172033]">
                  {selectedMentor}
                </h3>
                <p className="text-[10px] text-[var(--mr-muted)]">
                  Available for next session
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-[11px] text-[#3c5f8a]">
              <p className="flex items-center gap-2">
                <CalendarDays size={14} /> Next available: Tomorrow
              </p>
              <p className="flex items-center gap-2">
                <Clock size={14} /> Times will appear after scheduling
              </p>
            </div>

            <Link
              href="/mission-room/sessions"
              className="mt-4 block rounded-[12px] bg-white px-4 py-2.5 text-center text-[11px] font-semibold text-[var(--mr-blue)]"
            >
              View Session Details
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Milestone({
  title,
  label,
  active = false,
}: {
  title: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div
        className={`mt-0.5 h-3 w-3 rounded-full ${
          active ? "bg-[#10b981]" : "bg-[#d4deea]"
        }`}
      />
      <div>
        <p className="text-[10px] font-semibold text-[var(--mr-blue)]">
          {label}
        </p>
        <p className="text-[12px] font-semibold text-[#263445]">{title}</p>
      </div>
    </div>
  );
}