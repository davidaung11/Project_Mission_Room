const mentors = [
  {
    name: "Dr. Emily Carter",
    role: "Computer Science Advisor",
    specialty: "AI, Software Engineering, Portfolio Review",
    availability: "Available Today",
    rating: "4.9",
  },
  {
    name: "Michael Tan",
    role: "Business Program Mentor",
    specialty: "Business Strategy, Admission Planning, Interview Prep",
    availability: "Available Friday",
    rating: "4.8",
  },
  {
    name: "Sarah Lee",
    role: "Design Portfolio Coach",
    specialty: "UX/UI, Visual Design, Creative Portfolio",
    availability: "Available This Week",
    rating: "4.9",
  },
];

export default function MentorsPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-blue-600">Mentors</p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Meet Your Mentors
        </h1>

        <p className="mt-2 max-w-2xl text-slate-500">
          Connect with advisors who can guide your program selection, portfolio,
          and admission preparation.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <div
            key={mentor.name}
            className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
              👨‍🏫
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              {mentor.name}
            </h2>

            <p className="mt-1 text-sm font-medium text-blue-600">
              {mentor.role}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {mentor.specialty}
            </p>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div>
                <p className="text-xs text-slate-400">Availability</p>
                <p className="text-sm font-semibold text-slate-700">
                  {mentor.availability}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Rating</p>
                <p className="text-sm font-semibold text-slate-700">
                  ⭐ {mentor.rating}
                </p>
              </div>
            </div>

            <button className="mt-5 w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white">
              Book Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}