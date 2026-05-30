import MissionSidebar from "@/components/mission-room/MissionSidebar";

export default function MissionRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[var(--mr-bg)] text-[var(--mr-text)]">
      <div className="flex min-h-screen">
        <MissionSidebar />

        <section className="flex-1 bg-[linear-gradient(180deg,#f8fcff_0%,#eef8ff_100%)] px-5 py-5">
          <div className="min-h-full rounded-[20px] border border-[var(--mr-border)] bg-white/60 p-5">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}