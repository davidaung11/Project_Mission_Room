"use client";

import FilterPanel from "@/components/mission-room/FilterPanel";
import {
  BadgeCheck,
  BadgeDollarSign,
  CalendarDays,
  GraduationCap,
  Heart,
  MapPin,
  Sparkles,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const programs = [
  {
    title: "Bachelor of Business Administration",
    university: "Chula",
    duration: "4 Year",
    location: "Bangkok, TH",
    salary: "$95k/yr",
    ranking: "#1",
    tuition: "$30k/yr",
    acceptance: "30%",
  },
  {
    title: "Bachelor of Arts in Language and Culture",
    university: "Chula",
    duration: "4 Year",
    location: "Bangkok, TH",
    salary: "$75k/yr",
    ranking: "#1",
    tuition: "$25k/yr",
    acceptance: "35%",
  },
  {
    title: "Bachelor of Arts in Communication Management",
    university: "Chula",
    duration: "4 Year",
    location: "Bangkok, TH",
    salary: "$80k/yr",
    ranking: "#1",
    tuition: "$28k/yr",
    acceptance: "32%",
  },
  {
    title: "Bachelor of Arts in Economics",
    university: "Chula",
    duration: "4 Year",
    location: "Bangkok, TH",
    salary: "$90k/yr",
    ranking: "#1",
    tuition: "$27k/yr",
    acceptance: "34%",
  },
];

export default function DiscoveryCenterPage() {
  const [activeTab, setActiveTab] = useState<"program" | "scholarship">(
    "program"
  );
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showShortlisted, setShowShortlisted] = useState(false);
  const [showPersonalization, setShowPersonalization] = useState(false);

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) =>
      `${program.title} ${program.university}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  const toggleFavorite = (title: string) => {
    setFavorites((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  return (
    <div className="mx-auto max-w-[1180px]">
      <section className="pt-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/medalverse-logo.png"
            alt="Medalverse Logo"
            width={48}
            height={48}
            className="object-contain"
            priority
          />

          <h1 className="text-[36px] font-bold tracking-[-0.05em] text-[#3c3936]">
            Medalverse
          </h1>
        </div>

        <p className="mt-2 text-[13px] text-[#5f6f82]">
          Hey David. What are you looking for?
        </p>

        <div className="mx-auto mt-7 grid max-w-[760px] gap-4 md:grid-cols-3">
          <FeatureCard
            active={activeTab === "program"}
            icon="🎓"
            title="Program Information"
            desc="Explore programs you're interested in."
            onClick={() => setActiveTab("program")}
          />

          <FeatureCard
            active={activeTab === "scholarship"}
            icon="💵"
            title="Scholarship Information"
            desc="Find scholarships that match you."
            onClick={() => setActiveTab("scholarship")}
          />

          <Link
            href="/mission-room/plan"
            className="rounded-[18px] border border-[var(--mr-border)] bg-white/75 p-5 text-left shadow-[var(--mr-shadow)]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#f3f9ff]">
              📊
            </div>
            <h3 className="text-[13px] font-semibold text-[var(--mr-text)]">
              Suggestion Report
            </h3>
            <p className="mt-2 text-[11px] leading-5 text-[var(--mr-muted)]">
              Compare shortlisted programs and get your report.
            </p>
          </Link>
        </div>

        <div className="mx-auto mt-6 max-w-[760px] rounded-[18px] border border-[var(--mr-border)] bg-white/80 shadow-[var(--mr-shadow)]">
          <div className="flex min-h-[82px] items-start justify-between px-5 py-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything or search program..."
              className="w-full bg-transparent text-[13px] !text-[var(--mr-text)] outline-none placeholder:text-[var(--mr-muted)]"
            />

            <button
              type="button"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--mr-blue)] shadow-[var(--mr-shadow)]"
            >
              🔍
            </button>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex gap-8 border-b border-[var(--mr-border)]">
          <button
            type="button"
            onClick={() => setActiveTab("program")}
            className={`pb-3 text-[14px] ${
              activeTab === "program"
                ? "border-b-2 border-[var(--mr-blue)] font-semibold text-[var(--mr-blue)]"
                : "text-[var(--mr-muted)]"
            }`}
          >
            Program Information
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("scholarship")}
            className={`pb-3 text-[14px] ${
              activeTab === "scholarship"
                ? "border-b-2 border-[var(--mr-blue)] font-semibold text-[var(--mr-blue)]"
                : "text-[var(--mr-muted)]"
            }`}
          >
            Scholarship Information
          </button>
        </div>

        {activeTab === "program" ? (
          <>
            <div className="mt-6 flex items-center justify-between">
              <h2 className="text-[24px] font-semibold text-[#3c3936]">
                🎓 Program Information
              </h2>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowShortlisted(!showShortlisted)}
                  className={`rounded-[10px] border px-3 py-2 text-[12px] ${
                    showShortlisted
                      ? "border-[var(--mr-blue)] bg-[var(--mr-blue)] text-white"
                      : "border-[var(--mr-border)] bg-white text-[var(--mr-text)]"
                  }`}
                >
                  ♡ Shortlisted
                </button>

                <button
                  type="button"
                  onClick={() => setShowPersonalization(!showPersonalization)}
                  className={`rounded-[10px] border px-3 py-2 text-[12px] ${
                    showPersonalization
                      ? "border-[var(--mr-blue)] bg-[var(--mr-blue)] text-white"
                      : "border-[var(--mr-border)] bg-white text-[var(--mr-text)]"
                  }`}
                >
                  ⚙ Personalization
                </button>

                <button
                  type="button"
                  onClick={() => setShowFilter(!showFilter)}
                  className={`rounded-[10px] border px-3 py-2 text-[12px] ${
                    showFilter
                      ? "border-[var(--mr-blue)] bg-[var(--mr-blue)] text-white"
                      : "border-[var(--mr-border)] bg-white text-[var(--mr-text)]"
                  }`}
                >
                  ⛃ Filter
                </button>
              </div>
            </div>

            {filteredPrograms.length > 0 ? (
              <div
                className={`mt-6 grid gap-4 ${
                  showFilter ? "lg:grid-cols-[1fr_260px]" : ""
                }`}
              >
                <div
                  className={`grid gap-4 ${
                    showFilter
                      ? "md:grid-cols-2 xl:grid-cols-3"
                      : "md:grid-cols-4"
                  }`}
                >
                  {filteredPrograms.map((program) => (
                    <Link
                      key={program.title}
                      href="/mission-room/missions"
                      className="overflow-hidden rounded-[20px] border border-white/70 bg-white/75 shadow-[0_18px_45px_rgba(31,95,191,0.08)] backdrop-blur-xl"
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#fff5f8] p-2">
                            <Image
                              src="/logo.png"
                              alt="Chula logo"
                              width={58}
                              height={58}
                              className="h-full w-full object-contain"
                            />
                          </div>

                          <button
                            type="button"
                            aria-label="Favorite program"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(program.title);
                            }}
                            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-[0_10px_24px_rgba(31,95,191,0.08)] ${
                              favorites.includes(program.title)
                                ? "text-[#ff5b8a]"
                                : "text-[#cfd7df]"
                            }`}
                          >
                            <Heart
                              size={18}
                              fill={
                                favorites.includes(program.title)
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        </div>

                        <h3 className="mt-6 text-[16px] font-semibold leading-6 text-[#3c3936]">
                          {program.title}
                        </h3>

                        <p className="mt-2 text-[13px] text-[#7b7b7b]">
                          {program.university}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-y border-[#e8eef5] px-5 py-4">
                        <p className="text-[12px] font-medium text-[#3c3936]">
                          My Acceptance Rate
                        </p>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowCalculator(true);
                          }}
                          className="flex items-center gap-1 rounded-full bg-[#eaf4ff] px-4 py-2 text-[12px] font-semibold text-[#2580e8]"
                        >
                          <Sparkles size={14} />
                          Calculate
                        </button>
                      </div>

                      <div className="p-5">
                        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                          <Info
                            icon={<CalendarDays size={18} />}
                            label="Duration"
                            value={program.duration}
                          />
                          <Info
                            icon={<MapPin size={18} />}
                            label="Location"
                            value={program.location}
                          />
                          <Info
                            icon={<Wallet size={18} />}
                            label="Avg. Salary"
                            value={program.salary}
                          />
                          <Info
                            icon={<GraduationCap size={18} />}
                            label="Programme Ranking"
                            value={program.ranking}
                          />
                          <Info
                            icon={<BadgeDollarSign size={18} />}
                            label="Tuition Fee"
                            value={program.tuition}
                          />
                          <Info
                            icon={<BadgeCheck size={18} />}
                            label="Acceptance Rate"
                            value={program.acceptance}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {showFilter && <FilterPanel />}
              </div>
            ) : (
              <div className="mt-6 flex min-h-[320px] flex-col items-center justify-center rounded-[18px] border border-[var(--mr-border)] bg-white/60">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--mr-border)] bg-white text-[40px]">
                  🔍
                </div>

                <h3 className="mt-6 text-[18px] font-semibold text-[#3c3936]">
                  No results found
                </h3>

                <p className="mt-3 max-w-[340px] text-center text-[12px] leading-6 text-[var(--mr-muted)]">
                  Try adjusting your keywords or use the AI Advisor to discover
                  relevant programs.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="mt-6 rounded-[18px] border border-[var(--mr-border)] bg-white/80 p-6 shadow-[var(--mr-shadow)]">
            <h2 className="text-[22px] font-semibold text-[#3c3936]">
              💵 Scholarship Information
            </h2>
            <p className="mt-2 text-[12px] text-[var(--mr-muted)]">
              Scholarship section placeholder.
            </p>
          </div>
        )}
      </section>

      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-[360px] rounded-[20px] bg-white p-6 shadow-xl">
            <h2 className="text-[18px] font-semibold text-[#3c3936]">
              Acceptance Rate Calculator
            </h2>

            <p className="mt-2 text-[12px] text-[var(--mr-muted)]">
              Calculator popup placeholder. We can add form fields later.
            </p>

            <button
              type="button"
              onClick={() => setShowCalculator(false)}
              className="mt-5 w-full rounded-[12px] bg-[var(--mr-blue)] py-2.5 text-[12px] font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  active,
  onClick,
}: {
  icon: string;
  title: string;
  desc: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[18px] border p-5 text-left shadow-[var(--mr-shadow)] ${
        active
          ? "border-[var(--mr-blue)] bg-[#f5fbff]"
          : "border-[var(--mr-border)] bg-white/75"
      }`}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#f3f9ff]">
        {icon}
      </div>

      <h3 className="text-[13px] font-semibold text-[var(--mr-text)]">
        {title}
      </h3>

      <p className="mt-2 text-[11px] leading-5 text-[var(--mr-muted)]">
        {desc}
      </p>
    </button>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#2580e8] shadow-[0_8px_20px_rgba(31,95,191,0.08)]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] text-[#8a8a8a]">{label}</p>
        <p className="mt-0.5 text-[13px] font-medium text-[#3c3936]">
          {value}
        </p>
      </div>
    </div>
  );
}