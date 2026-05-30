"use client";

import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Wallet,
  GraduationCap,
  BadgeDollarSign,
  BadgeCheck,
  Sparkles,
  Heart,
} from "lucide-react";

type MissionCardProps = {
  title: string;
  program: string;
  progress?: number;
  sessions?: number;
  tasks?: number;
  logo?: string;
};

export default function MissionCard({
  title,
  program,
  logo = "/logo.png",
}: MissionCardProps) {
  const [favorite, setFavorite] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-[20px] border border-white/70 bg-white/75 shadow-[0_18px_45px_rgba(31,95,191,0.08)] backdrop-blur-xl">
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#fff5f8] p-2">
              <img src={logo} alt={`${title} logo`} className="h-full w-full object-contain" />
            </div>

            <button
              type="button"
              aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
              onClick={() => setFavorite(!favorite)}
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-[0_10px_24px_rgba(31,95,191,0.08)] ${
                favorite ? "text-[#ff5b8a]" : "text-[#cfd7df]"
              }`}
            >
              <Heart size={18} fill={favorite ? "currentColor" : "none"} />
            </button>
          </div>

          <h2 className="mt-6 text-[16px] font-semibold leading-6 text-[#3c3936]">
            {program}
          </h2>

          <p className="mt-2 text-[13px] text-[#7b7b7b]">{title}</p>
        </div>

        <div className="flex items-center justify-between border-t border-[#e8eef5] px-5 py-4">
          <p className="text-[12px] font-medium text-[#3c3936]">
            My Acceptance Rate
          </p>

          <button
            type="button"
            onClick={() => setShowCalculator(true)}
            className="flex items-center gap-1 rounded-full bg-[#eaf4ff] px-4 py-2 text-[12px] font-semibold text-[#2580e8]"
          >
            <Sparkles size={14} />
            Calculate
          </button>
        </div>

        <div className="border-t border-[#e8eef5] p-5">
          <div className="grid grid-cols-2 gap-x-5 gap-y-5">
            <Info icon={<CalendarDays size={18} />} label="Duration" value="4 Year" />
            <Info icon={<MapPin size={18} />} label="Location" value="Bangkok,TH" />
            <Info icon={<Wallet size={18} />} label="Avg. Salary" value="$120k/yr" />
            <Info icon={<GraduationCap size={18} />} label="Programme Ranking" value="#1" />
            <Info icon={<BadgeDollarSign size={18} />} label="Tuition Fee" value="$30k/yr" />
            <Info icon={<BadgeCheck size={18} />} label="Acceptance Rate" value="30%" />
          </div>
        </div>
      </div>

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
    </>
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