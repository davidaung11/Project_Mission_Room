"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  Cloud,
  ClipboardList,
  Grid3X3,
  Menu,
  NotebookPen,
  Rocket,
} from "lucide-react";

export default function MissionSidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(true);
  const [workspaceOpen, setWorkspaceOpen] = useState(true);

  const isActive = (href: string) => pathname === href;
  const isWorkspaceActive =
    pathname === "/mission-room/workspace" ||
    pathname === "/mission-room/missions" ||
    pathname === "/mission-room/mentors" ||
    pathname === "/mission-room/settings";

  return (
    <aside className="flex h-screen bg-white">
      <div className="flex w-[72px] flex-col items-center border-r border-[var(--mr-border)] py-5">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="mb-24"
          aria-label="Open Mission Room menu"
        >
          <Image
            src="/Logo(1).png"
            alt="Medalverse Logo"
            width={30}
            height={30}
            className="object-contain"
            priority
          />
        </button>

        <div className="space-y-5 text-center">
          <RailItem label="Credential Cloud" icon={<Cloud size={17} />} />
          <RailItem label="Mission Room" icon={<Rocket size={17} />} active />
          <RailItem label="Experience Hub" icon={<Grid3X3 size={17} />} />
        </div>

        <div className="mt-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#343434] text-[10px] text-white">
          P
        </div>
      </div>

      {menuOpen && (
        <div className="w-[210px] border-r border-[var(--mr-border)] bg-white px-4 py-5">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-[13px] font-semibold text-[var(--mr-text)]">
              Mission Room
            </h1>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-[var(--mr-muted)]"
              aria-label="Close sidebar"
            >
              <Menu size={17} />
            </button>
          </div>

          <nav className="space-y-2">
            <Link
              href="/mission-room"
              className={`flex items-center gap-2 rounded-[12px] px-3 py-2 text-[11px] ${
                isActive("/mission-room")
                  ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
                  : "text-[var(--mr-muted)] hover:bg-[#f7fbff]"
              }`}
            >
              <BookOpen size={15} />
              Discovery Center
            </Link>

            <div>
              <div className="flex items-center gap-1">
                <Link
                  href="/mission-room/workspace"
                  className={`flex flex-1 items-center gap-2 rounded-[12px] px-3 py-2 text-[11px] whitespace-nowrap ${
                    isWorkspaceActive
                      ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
                      : "text-[var(--mr-muted)] hover:bg-[#f7fbff]"
                  }`}
                >
                  <Rocket size={15} />
                  Mission Workspace
                </Link>

                <button
                  type="button"
                  onClick={() => setWorkspaceOpen(!workspaceOpen)}
                  className="px-1 text-[var(--mr-muted)]"
                  aria-label="Toggle Mission Workspace submenu"
                >
                  {workspaceOpen ? "⌃" : "⌄"}
                </button>
              </div>

              {workspaceOpen && (
                <div className="mt-1 space-y-1 pl-7">
                  <SubLink href="/mission-room/missions" label="Missions" />
                  <SubLink href="/mission-room/mentors" label="Mentors" />
                  <SubLink href="/mission-room/settings" label="Settings" />
                </div>
              )}
            </div>

            <Link
              href="/mission-room/plan"
              className={`flex items-center gap-2 rounded-[12px] px-3 py-2 text-[11px] ${
                isActive("/mission-room/plan")
                  ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
                  : "text-[var(--mr-muted)] hover:bg-[#f7fbff]"
              }`}
            >
              <ClipboardList size={15} />
              Smart Planner
            </Link>

            <Link
              href="/mission-room/essay-studio"
              className={`flex items-center gap-2 rounded-[12px] px-3 py-2 text-[11px] ${
                isActive("/mission-room/essay-studio")
                  ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
                  : "text-[var(--mr-muted)] hover:bg-[#f7fbff]"
              }`}
            >
              <NotebookPen size={15} />
              Essay Studio
            </Link>
          </nav>
        </div>
      )}
    </aside>
  );
}

function SubLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`block rounded-[10px] px-3 py-2 text-[11px] ${
        active
          ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
          : "text-[var(--mr-muted)] hover:bg-[#f7fbff]"
      }`}
    >
      {label}
    </Link>
  );
}

function RailItem({
  label,
  icon,
  active,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[14px] px-2 py-2 text-[10px] ${
        active
          ? "bg-[var(--mr-blue-soft)] font-semibold text-[var(--mr-blue)]"
          : "text-[var(--mr-muted)]"
      }`}
    >
      <div className="mb-1 flex justify-center">{icon}</div>
      <p>{label.split(" ")[0]}</p>
      <p>{label.split(" ")[1]}</p>
    </div>
  );
}