export default function FilterPanel() {
  return (
    <aside className="w-[260px] rounded-[16px] border border-[var(--mr-border)] bg-white/90 p-4 shadow-[var(--mr-shadow)]">
      <FilterGroup title="Program">
        <Select label="Sort By" value="Recommend" />
        <Select label="Academic Field" value="All Academic Field" />
        <Select label="Program Duration" value="All Program Duration" />
        <Select label="Degree" value="All Degree" />
        <Range label="Average Graduate Salary" />
        <Range label="Predicted Acceptance Rate (%)" />
      </FilterGroup>

      <FilterGroup title="Outcomes">
        <Range label="Graduation Rate" />
        <Range label="Employment Rate" />
        <Range label="Avg. Salary" />
        <Select label="Avg. Salary" value="All City" />
      </FilterGroup>

      <FilterGroup title="Affordability">
        <Range label="Cost, USD" />
        <Range label="Avg. Financial Aid" />
        <Select label="Graduate Debt" value="All Degree" />
      </FilterGroup>

      <FilterGroup title="Location">
        <Select label="Region" value="All Region" />
        <Select label="Country" value="All Country" />
        <Select label="City" value="All City" />
      </FilterGroup>

      <FilterGroup title="Admissions">
        <Select label="Academic Score" value="All Academic Score" />
        <Select label="Tier" value="All Academic Score" />
      </FilterGroup>

      <button className="mt-3 w-full rounded-full border border-[var(--mr-border)] bg-white py-2 text-[11px] font-semibold text-[var(--mr-text)]">
        Clear
      </button>
    </aside>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[var(--mr-border)] py-3 last:border-b-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[12px] font-semibold text-[#3c3936]">{title}</h3>
        <span className="text-[11px]">⌃</span>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Select({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-[10px] text-[#6e7f94]">{label}</span>

      <select className="mt-1 w-full rounded-[8px] border border-[var(--mr-border)] bg-white px-2 py-2 text-[10px] text-[var(--mr-text)] outline-none">
        <option>{value}</option>
      </select>
    </label>
  );
}

function Range({ label }: { label: string }) {
  return (
    <div>
      <p className="text-[10px] text-[#6e7f94]">{label}</p>

      <input type="range" className="mt-1 w-full" />

      <div className="mt-1 grid grid-cols-2 gap-2">
        <input
          defaultValue="$0"
          className="rounded-[8px] border border-[var(--mr-border)] px-2 py-1 text-[10px] outline-none"
        />

        <input
          defaultValue="$1,999"
          className="rounded-[8px] border border-[var(--mr-border)] px-2 py-1 text-[10px] outline-none"
        />
      </div>
    </div>
  );
}