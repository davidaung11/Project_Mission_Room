export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-blue-600">Settings</p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Mission Room Settings
        </h1>

        <p className="mt-2 max-w-2xl text-slate-500">
          Manage your profile, notification preferences, and mission workspace.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Profile Information
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input label="Full Name" value="Hein Htet Aung" />
            <Input label="Email" value="heinhtetaung5698@gmail.com" />
            <Input label="Study Interest" value="Computer Science" />
            <Input label="Location" value="Bangkok, Thailand" />
          </div>

          <button className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
            Save Changes
          </button>
        </div>

        <div className="space-y-5">
          <SettingCard
            title="Email Notifications"
            description="Receive mission updates and advisor reminders."
          />

          <SettingCard
            title="Progress Tracking"
            description="Show progress cards inside your dashboard."
          />

          <SettingCard
            title="Advisor Recommendations"
            description="Allow mentors to suggest personalized plans."
          />
        </div>
      </div>
    </div>
  );
}

function Input({ label, value }: { label: string; value: string }) {
  return (
    <div>
    <label
  htmlFor={label}
  className="text-sm font-semibold text-slate-700"
>
  {label}
</label>

<input
  id={label}
  title={label}
  placeholder={label}
  defaultValue={value}
      />
    </div>
  );
}

function SettingCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

       <button
  aria-label="Toggle setting"
  className="h-7 w-12 rounded-full bg-blue-600 p-1"
>
          <span className="block h-5 w-5 translate-x-5 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
}