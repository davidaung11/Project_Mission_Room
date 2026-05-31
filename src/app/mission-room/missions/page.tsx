"use client";

import { saveMission } from "@/lib/mission-storage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const missionPrograms = [
  {
    title: "BBA Chula",
    university: "Chulalongkorn University",
    category: "Business",
    description: "International business, management, finance, and strategy.",
    logo: "/logo.png",
  },
  {
    title: "BALAC Chula",
    university: "Chulalongkorn University",
    category: "Language",
    description: "Language, culture, global communication, and humanities.",
    logo: "/logo.png",
  },
  {
    title: "JCC Chula",
    university: "Chulalongkorn University",
    category: "Communication",
    description: "Communication management, media strategy, and digital culture.",
    logo: "/logo.png",
  },
];

const chips = ["All", "Business", "Communication", "Language"];

export default function MissionsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState("All");

  const filteredPrograms = useMemo(() => {
    return missionPrograms.filter((program) => {
      const matchesSearch = `${program.title} ${program.university} ${program.description}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesChip =
        activeChip === "All" || program.category === activeChip;

      return matchesSearch && matchesChip;
    });
  }, [search, activeChip]);

  const handleSelectMission = (program: (typeof missionPrograms)[number]) => {
    saveMission({
      id: program.title,
      title: program.title,
      program: program.description,
      university: program.university,
      progress: 5,
      sessions: 0,
      tasks: 3,
      logo: program.logo,
    });

    router.push("/mission-room/plan");
  };

  return (
    <div>
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#3c3936]">
          Start Your Mission
        </h1>

        <p className="mt-1 text-[12px] text-[var(--mr-muted)]">
          Choose a program to create your academic mission roadmap.
        </p>
      </div>

      <div className="mx-auto mb-3 flex max-w-4xl rounded-[16px] border border-[var(--mr-border)] bg-white/85 p-1.5 shadow-[var(--mr-shadow)]">
        <input
          aria-label="Search target program"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your target program e.g., BBA, BALAC, JCC"
          className="flex-1 bg-transparent px-3 text-[12px] !text-[var(--mr-text)] outline-none placeholder:text-[var(--mr-light-muted)] caret-[var(--mr-blue)]"
        />

        <button className="rounded-[12px] bg-[var(--mr-blue)] px-5 py-2.5 text-[12px] font-semibold text-white">
          Search
        </button>
      </div>

      <div className="mb-6 flex justify-center gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setActiveChip(chip)}
            className={`rounded-full border px-3 py-1 text-[10px] font-medium ${
              activeChip === chip
                ? "border-[var(--mr-blue)] bg-[var(--mr-blue-soft)] text-[var(--mr-blue)]"
                : "border-[var(--mr-border)] bg-white/80 text-[var(--mr-muted)]"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {filteredPrograms.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-3">
          {filteredPrograms.map((program) => (
            <div
              key={program.title}
              className="rounded-[18px] border border-[var(--mr-border)] bg-white/90 p-5 shadow-[var(--mr-shadow)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#fff5f8] p-2">
                <Image
                  src={program.logo}
                  alt={`${program.title} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <h2 className="text-[15px] font-semibold text-[#3c3936]">
                {program.title}
              </h2>

              <p className="mt-1 text-[11px] font-medium text-[var(--mr-blue)]">
                {program.university}
              </p>

              <span className="mt-3 inline-flex rounded-full bg-[var(--mr-blue-soft)] px-3 py-1 text-[10px] font-semibold text-[var(--mr-blue)]">
                {program.category}
              </span>

              <p className="mt-3 min-h-[44px] text-[12px] leading-5 text-[var(--mr-muted)]">
                {program.description}
              </p>

              <button
                type="button"
                onClick={() => handleSelectMission(program)}
                className="mt-5 block w-full rounded-[12px] bg-[var(--mr-blue)] py-2.5 text-center text-[12px] font-semibold text-white"
              >
                Select Program
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex min-h-[300px] flex-col items-center justify-center rounded-[18px] border border-[var(--mr-border)] bg-white/60">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--mr-border)] bg-white text-[34px] text-[#7f8fa3] shadow-sm">
            🔍
          </div>

          <h3 className="mt-5 text-[16px] font-semibold text-[#3c3936]">
            No programs found
          </h3>

          <p className="mt-2 max-w-[320px] text-center text-[12px] leading-6 text-[var(--mr-muted)]">
            Try another keyword or choose a different category.
          </p>
        </div>
      )}

      <div className="mt-6 rounded-[16px] bg-[#263445] p-5 text-white">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-[16px] font-semibold">
              Not sure where to start?
            </h2>
            <p className="mt-1 text-[12px] text-white/70">
              Talk to an advisor for a free consultation and personalized guidance.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/mission-room/consultation")}
            className="rounded-[12px] bg-[var(--mr-green)] px-5 py-2.5 text-center text-[12px] font-semibold text-[#172033]"
          >
            Book Free Consult
          </button>
        </div>
      </div>
    </div>
  );
}