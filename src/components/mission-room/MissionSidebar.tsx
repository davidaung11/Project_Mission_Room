"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarClock,
  Cloud,
  Compass,
  Grid3X3,
  LayoutDashboard,
  MessageCircle,
  Users,
} from "lucide-react";

function isActive(pathname: string, href: string) {
  if (href === "/mission-room") {
    return pathname === "/mission-room";
  }

  return pathname.startsWith(href);
}

export default function MissionSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen shrink-0 bg-white">
      {/* Left Rail */}
      <div className="flex w-[72px] flex-col items-center border-r border-[var(--mr-border)] bg-white px-2 py-5">
        <Link href="/mission-room">
          <Image
            src="/Logo(1).png"
            alt="Medalverse Logo"
            width={30}
            height={30}
            priority
          />
        </Link>

        <div className="mt-28 flex w-full flex-col gap-4">
          <RailItem icon={<Cloud size={18} />} label="Credential Cloud" />

          <RailItem
            icon={<Compass size={18} />}
            label="Mission Room"
            active
          />

          <RailItem icon={<Grid3X3 size={18} />} label="Experience Hub" />
        </div>

        <div className="mt-auto flex flex-col items-center gap-5">
          <Bell size={18} className="text-[#3c3936]" />

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#343434] text-[11px] font-semibold text-white">
            D
          </div>
        </div>
      </div>

      {/* Mission Menu */}
      <div className="flex w-[180px] flex-col border-r border-[var(--mr-border)] bg-[#edf4ff] px-3 py-5">
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[var(--mr-blue)]">
            <Image
              src="/Logo(1).png"
              alt="Mission Logo"
              width={20}
              height={20}
              className="brightness-0 invert"
            />
          </div>

          <div>
            <h1 className="text-[18px] font-bold leading-none text-[var(--mr-blue)]">
              Mission
            </h1>

            <p className="mt-1 text-[10px] text-[#3c5f8a]">
              Digital Mentor
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          <MenuItem
            href="/mission-room"
            icon={<LayoutDashboard size={15} />}
            label="Dashboard"
            active={isActive(pathname, "/mission-room")}
          />

          <MenuItem
            href="/mission-room/sessions"
            icon={<CalendarClock size={15} />}
            label="Upcoming Session"
            active={isActive(pathname, "/mission-room/sessions")}
          />

          <MenuItem
            href="/mission-room/mentors"
            icon={<Users size={15} />}
            label="Mentor Discovery"
            active={isActive(pathname, "/mission-room/mentors")}
          />

          {/* Future Chatbot */}
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-[6px] bg-black px-3 py-3 text-left text-[11px] font-semibold text-white hover:bg-[#172033]"
          >
            <MessageCircle size={15} />
            Talk To Advisor
          </button>
        </nav>
      </div>
    </aside>
  );
}

function RailItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  const words = label.split(" ");

  return (
    <div
      className={`flex flex-col items-center rounded-[14px] px-2 py-2 text-center text-[10px] ${
        active
          ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
          : "text-[#7c8a99]"
      }`}
    >
      <div className="mb-1">{icon}</div>

      <p>{words[0]}</p>
      <p>{words.slice(1).join(" ")}</p>
    </div>
  );
}

function MenuItem({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-[6px] px-3 py-3 text-[11px] font-semibold ${
        active
          ? "bg-[var(--mr-blue)] text-white"
          : "bg-black text-white hover:bg-[#172033]"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}