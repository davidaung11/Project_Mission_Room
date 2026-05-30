"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const missionPrograms = [
  {
    title: "BBA Chula",
    university: "Chulalongkorn University",
    description: "International business, management, finance, and strategy.",
    duration: "4 Years",
    location: "Bangkok, TH",
    salary: "$95k/yr",
    ranking: "#1",
    tuition: "$30k/yr",
    acceptance: "30%",
    logo: "/logo.png",
  },
  {
    title: "BALAC Chula",
    university: "Chulalongkorn University",
    description: "Language, culture, global communication, and humanities.",
    duration: "4 Years",
    location: "Bangkok, TH",
    salary: "$75k/yr",
    ranking: "#1",
    tuition: "$25k/yr",
    acceptance: "35%",
    logo: "/logo.png",
  },
  {
    title: "JCC Chula",
    university: "Chulalongkorn University",
    description: "Communication management, media strategy, and digital culture.",
    duration: "4 Years",
    location: "Bangkok, TH",
    salary: "$80k/yr",
    ranking: "#1",
    tuition: "$28k/yr",
    acceptance: "32%",
    logo: "/logo.png",
  },
];

const chips = ["International Program", "Business", "Communication", "Language"];

export default function MissionsPage() {
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState("International Program");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredPrograms = useMemo(() => {
    return missionPrograms.filter((program) =>
      `${program.title} ${program.university} ${program.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const toggleFavorite = (title: string) => {
    setFavorites((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  return (
    <div>
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#3c3936]">
          Start Your Mission
        </h1>

        <p className="mt-1 text-[12px] text-[var(--mr-muted)]">
          Choose a program or talk to an expert to build your academic roadmap.
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

      {filteredPrograms.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-3">
          {filteredPrograms.map((program) => (
            <div
              key={program.title}
              className="rounded-[16px] border border-[var(--mr-border)] bg-white/90 p-4 shadow-[var(--mr-shadow)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#fff5f8] p-2">
                  <img
                    src={program.logo}
                    alt={`${program.title} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  aria-label={
                    favorites.includes(program.title)
                      ? "Remove from shortlisted"
                      : "Add to shortlisted"
                  }
                  onClick={() => toggleFavorite(program.title)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full shadow-[var(--mr-shadow)] ${
                    favorites.includes(program.title)
                      ? "bg-[#ffeaf1] text-[#ff5b8a]"
                      : "bg-white text-[#c7d2df]"
                  }`}
                >
                  ♥
                </button>
              </div>

              <h2 className="text-[14px] font-semibold text-[var(--mr-text)]">
                {program.title}
              </h2>

              <p className="mt-0.5 text-[11px] font-medium text-[var(--mr-blue)]">
                {program.university}
              </p>

              <p className="mt-2 min-h-[38px] text-[11px] leading-5 text-[var(--mr-muted)]">
                {program.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Info label="Duration" value={program.duration} />
                <Info label="Location" value={program.location} />
                <Info label="Avg. Salary" value={program.salary} />
                <Info label="Ranking" value={program.ranking} />
                <Info label="Tuition Fee" value={program.tuition} />
                <Info label="Acceptance Rate" value={program.acceptance} />
              </div>

              <Link
                href="/mission-room/plan"
                className="mt-4 block rounded-[12px] bg-[var(--mr-blue)] py-2.5 text-center text-[12px] font-semibold text-white"
              >
                Select
              </Link>
            </div>
          ))}
        </div>
      )}

      {filteredPrograms.length === 0 && (
        <div className="mt-6 flex min-h-[300px] flex-col items-center justify-center rounded-[18px] border border-[var(--mr-border)] bg-white/60">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--mr-border)] bg-white text-[34px] text-[#7f8fa3] shadow-sm">
            🔍
          </div>

          <h3 className="mt-5 text-[16px] font-semibold text-[#3c3936]">
            No results found
          </h3>

          <p className="mt-2 max-w-[320px] text-center text-[12px] leading-6 text-[var(--mr-muted)]">
            Try adjusting your keywords or use the AI Advisor to discover
            relevant programs.
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

          <Link
            href="/mission-room/consultation"
            className="rounded-[12px] bg-[var(--mr-green)] px-5 py-2.5 text-center text-[12px] font-semibold text-[#172033]"
          >
            Book Free Consult
          </Link>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[12px] bg-[#f6faff] p-2.5">
      <p className="text-[9px] text-[var(--mr-light-muted)]">{label}</p>
      <p className="mt-0.5 text-[11px] font-semibold text-[var(--mr-text)]">
        {value}
      </p>
    </div>
  );
}