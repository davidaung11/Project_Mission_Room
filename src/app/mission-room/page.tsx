"use client";

import {
  clearMissions,
  getSavedMissions,
  type SavedMission,
} from "@/lib/mission-storage";
import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type DashboardTab = "sessions" | "mentors" | "advisor";

export default function MissionRoomDashboardPage() {
  const router = useRouter();
  const [missions, setMissions] = useState<SavedMission[]>([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<DashboardTab>("sessions");

  useEffect(() => {
    setMissions(getSavedMissions());
  }, []);

  const filteredMissions = useMemo(() => {
    return missions.filter((mission) =>
      `${mission.title} ${mission.program} ${mission.university}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [missions, search]);

  const hasMissions = missions.length > 0;

  const handleClearDemo = () => {
    clearMissions();
    setMissions([]);
  };

  return (
    <div>
      <DashboardTopbar search={search} setSearch={setSearch} />

      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#3c3936]">
            Your Mission Workspace
          </h1>

          <p className="mt-1 text-[12px] text-[var(--mr-muted)]">
            Track your academic progress and upcoming milestones.
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/mission-room/missions")}
          className="rounded-[12px] bg-[var(--mr-blue)] px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_8px_20px_rgba(11,93,204,0.18)]"
        >
          + Create New Mission
        </button>
      </div>

      {!hasMissions ? (
        <EmptyState />
      ) : (
        <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {filteredMissions.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredMissions.map((mission) => (
                  <DashboardMissionCard
                    key={mission.id}
                    mission={mission}
                    onOpen={() => router.push("/mission-room/plan")}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[22px] border border-dashed border-[var(--mr-border)] bg-white/65 p-8 text-center shadow-[var(--mr-shadow)]">
                <h2 className="text-[18px] font-semibold text-[#3c3936]">
                  No missions found
                </h2>
                <p className="mt-2 text-[12px] text-[var(--mr-muted)]">
                  Try searching with another mission or program name.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={handleClearDemo}
              className="text-[11px] font-medium text-[var(--mr-muted)] underline"
            >
              Clear demo missions
            </button>
          </div>

          <aside className="rounded-[18px] border border-[var(--mr-border)] bg-white/85 p-4 shadow-[var(--mr-shadow)]">
            <div className="mb-4 grid grid-cols-3 rounded-[14px] bg-[#f5f9fd] p-1">
              <TabButton
                active={activeTab === "sessions"}
                onClick={() => setActiveTab("sessions")}
              >
                Sessions
              </TabButton>
              <TabButton
                active={activeTab === "mentors"}
                onClick={() => setActiveTab("mentors")}
              >
                Mentors
              </TabButton>
              <TabButton
                active={activeTab === "advisor"}
                onClick={() => setActiveTab("advisor")}
              >
                Advisor
              </TabButton>
            </div>

            {activeTab === "sessions" && (
              <div>
                <h3 className="text-[15px] font-semibold text-[#3c3936]">
                  Upcoming Sessions
                </h3>
                <div className="mt-4 space-y-3">
                  <Session title="Interview Prep" time="Tomorrow, 10:00 AM" />
                  <Session title="Portfolio Review" time="Friday, 2:00 PM" />
                </div>
              </div>
            )}

            {activeTab === "mentors" && (
              <div>
                <h3 className="text-[15px] font-semibold text-[#3c3936]">
                  Mentor Discovery
                </h3>
                <p className="mt-4 text-[12px] leading-5 text-[var(--mr-muted)]">
                  Find mentors based on your selected programs and upcoming
                  milestones.
                </p>
                <button
                  type="button"
                  onClick={() => router.push("/mission-room/mentors")}
                  className="mt-4 w-full rounded-[12px] border border-[var(--mr-border)] bg-white px-4 py-2 text-[11px] font-semibold text-[var(--mr-text)]"
                >
                  Browse Mentors
                </button>
              </div>
            )}

            {activeTab === "advisor" && (
              <div>
                <h3 className="text-[15px] font-semibold text-[#3c3936]">
                  Talk To Advisor
                </h3>
                <p className="mt-4 text-[12px] leading-5 text-[var(--mr-muted)]">
                  Need help planning your next step? Book a free consultation
                  with an advisor.
                </p>
                <button
                  type="button"
                  onClick={() => router.push("/mission-room/consultation")}
                  className="mt-4 w-full rounded-[12px] bg-[var(--mr-green)] px-4 py-2 text-[11px] font-semibold text-[#172033]"
                >
                  Book Free Consult
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

function DashboardTopbar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <div className="mb-7 flex items-center justify-between border-b border-[var(--mr-border)] pb-4">
      <div className="relative w-full max-w-[520px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b97a7]"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your missions..."
          className="w-full rounded-full border border-[var(--mr-border)] bg-white px-11 py-2.5 text-[12px] text-[var(--mr-text)] outline-none placeholder:text-[#8b97a7]"
        />
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-3">
        <div className="rounded-full bg-[#eef5ff] px-4 py-2 text-[12px] font-semibold text-[var(--mr-blue)]">
          ◎ 120 Credits
        </div>

        <div className="flex items-center gap-1 rounded-full bg-[#e8fff4] px-4 py-2 text-[12px] font-semibold text-[#17a46b]">
          <Settings size={14} />
          Pro Member
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3c3936] shadow-[var(--mr-shadow)]"
        >
          <Bell size={17} />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dbeafe] text-[12px] font-semibold text-[var(--mr-blue)]">
          D
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[460px] flex-col items-center justify-center rounded-[22px] border border-dashed border-[var(--mr-border)] bg-white/65 p-8 text-center shadow-[var(--mr-shadow)]">
      <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#f5fbff]">
        <Image
          src="/logo.png"
          alt="Mission logo"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <h2 className="mt-6 text-[22px] font-semibold text-[#3c3936]">
        No missions yet
      </h2>

      <p className="mt-2 max-w-[420px] text-[12px] leading-6 text-[var(--mr-muted)]">
        Start by creating your first mission from the button above. Once you
        finish the setup, your mission cards will appear here.
      </p>
    </div>
  );
}

function DashboardMissionCard({
  mission,
  onOpen,
}: {
  mission: SavedMission;
  onOpen: () => void;
}) {
  const color =
    mission.progress >= 65
      ? "bg-[var(--mr-blue)]"
      : mission.progress >= 20
        ? "bg-[#41c98f]"
        : "bg-[#d95f4f]";

  const softColor =
    mission.progress >= 65
      ? "bg-[#eaf3ff] text-[var(--mr-blue)]"
      : mission.progress >= 20
        ? "bg-[#eafaf3] text-[#239865]"
        : "bg-[#fff0ee] text-[#c75043]";

  return (
    <div className="rounded-[18px] border border-[var(--mr-border)] bg-white/85 p-4 shadow-[var(--mr-shadow)]">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#fff5f8] p-2">
          <Image
            src={mission.logo}
            alt={`${mission.title} logo`}
            width={42}
            height={42}
            className="h-full w-full object-contain"
          />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${softColor}`}
        >
          {mission.progress}%
        </span>
      </div>

      <h2 className="mt-4 text-[14px] font-semibold leading-5 text-[#3c3936]">
        {mission.title}
      </h2>

      <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-[var(--mr-muted)]">
        {mission.program}
      </p>

      <div className="mt-4">
        <div className="mb-1.5 flex justify-between text-[10px] font-medium">
          <span className="text-[var(--mr-muted)]">Current Progress</span>
          <span className="text-[#3c3936]">{mission.progress}%</span>
        </div>

        <div className="h-1.5 rounded-full bg-[#edf3fa]">
          <div
            className={`h-1.5 rounded-full ${color}`}
            style={{ width: `${mission.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 text-[10px] text-[var(--mr-muted)]">
        <span>◷ {mission.sessions} Sessions</span>
        <span>▣ {mission.tasks} Tasks</span>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-4 w-full rounded-[12px] border border-[var(--mr-border)] bg-white py-2 text-[11px] font-semibold text-[var(--mr-text)] hover:bg-[#f5faff]"
      >
        Mission Room →
      </button>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[11px] px-2 py-2 text-[11px] font-semibold transition ${
        active
          ? "bg-white text-[var(--mr-blue)] shadow-[var(--mr-shadow)]"
          : "text-[var(--mr-muted)]"
      }`}
    >
      {children}
    </button>
  );
}

function Session({ title, time }: { title: string; time: string }) {
  return (
    <div className="rounded-[14px] bg-[#f5f9fd] p-3">
      <p className="text-[12px] font-semibold text-[#3c3936]">{title}</p>
      <p className="mt-1 text-[11px] text-[var(--mr-muted)]">{time}</p>
    </div>
  );
}