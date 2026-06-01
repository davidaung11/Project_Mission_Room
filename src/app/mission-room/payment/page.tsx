"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    credits: "40 credits/mo",
    features: ["Standard Mentor Access", "Community Support"],
  },
  {
    name: "Standard",
    price: "$59",
    credits: "80 credits/mo",
    features: ["Full Mentor Library", "24h Support Turnaround"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$99",
    credits: "120 credits/mo",
    features: ["Elite Mentor Access", "1-on-1 Strategy Session"],
    current: true,
  },
];

const creditPacks = [
  { credits: "10", price: "$15" },
  { credits: "25", price: "$35" },
  { credits: "50", price: "$60" },
];

export default function PaymentPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [selectedPack, setSelectedPack] = useState("25");

  return (
    <div>
      <section className="mb-6 rounded-[16px] border border-[var(--mr-blue)] bg-white/90 p-4 shadow-[var(--mr-shadow)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] font-semibold text-[#172033]">
              Current Subscription
            </p>
            <span className="mt-1 inline-flex rounded-full bg-[#48e6b2] px-2 py-1 text-[9px] font-semibold text-[#12332b]">
              Premium Plan
            </span>
          </div>

          <div className="text-right">
            <p className="text-[32px] font-bold text-[var(--mr-blue)]">120</p>
            <p className="text-[9px] font-semibold uppercase text-[var(--mr-muted)]">
              Remaining Credits
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mb-6 max-w-2xl text-center">
        <h1 className="text-[26px] font-semibold tracking-[-0.03em] text-[#172033]">
          Upgrade your digital mentorship
        </h1>

        <p className="mt-2 text-[12px] leading-5 text-[var(--mr-muted)]">
          Choose a plan that fits your academic goals. Scale up or down as your
          project complexity changes.
        </p>

        <div className="mx-auto mt-5 inline-flex rounded-full bg-[#eef5ff] p-1">
          <button className="rounded-full bg-white px-4 py-1.5 text-[10px] font-semibold text-[#172033]">
            Monthly
          </button>
          <button className="px-4 py-1.5 text-[10px] font-semibold text-[var(--mr-muted)]">
            Yearly (Save 20%)
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => {
          const selected = selectedPlan === plan.name;

          return (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.name)}
              className={`relative rounded-[18px] border bg-white/90 p-5 text-left shadow-[var(--mr-shadow)] ${
                selected ? "border-[var(--mr-blue)]" : "border-[var(--mr-border)]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--mr-blue)] px-5 py-1 text-[9px] font-bold uppercase text-white">
                  Most Popular
                </span>
              )}

              <h2 className="text-[15px] font-semibold text-[#172033]">
                {plan.name}
              </h2>

              <p className="mt-1 text-[10px] text-[var(--mr-muted)]">
                {plan.name === "Basic"
                  ? "For students starting their journey."
                  : plan.name === "Standard"
                  ? "Accelerate your learning pace."
                  : "Unrestricted academic power."}
              </p>

              <p className="mt-6 text-[34px] font-bold text-[#172033]">
                {plan.price}
                <span className="text-[12px] font-medium text-[var(--mr-muted)]">
                  /mo
                </span>
              </p>

              <div className="mt-4 space-y-3 text-[12px] text-[#263445]">
                <p>✓ {plan.credits}</p>
                {plan.features.map((feature) => (
                  <p key={feature}>✓ {feature}</p>
                ))}
              </div>

              <div
                className={`mt-6 rounded-[12px] py-3 text-center text-[12px] font-semibold ${
                  selected
                    ? "bg-[var(--mr-blue)] text-white"
                    : "border border-[var(--mr-blue)] text-[var(--mr-blue)]"
                }`}
              >
                {plan.current ? "Current Plan" : `Choose ${plan.name}`}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_300px]">
        <section className="rounded-[18px] bg-white/90 p-5 shadow-[var(--mr-shadow)]">
          <h2 className="text-[15px] font-semibold text-[#172033]">
            Add-on Credits
          </h2>

          <p className="mt-1 text-[11px] text-[var(--mr-muted)]">
            Purchase individual credits to keep your momentum going.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {creditPacks.map((pack) => (
              <button
                key={pack.credits}
                type="button"
                onClick={() => setSelectedPack(pack.credits)}
                className={`rounded-[12px] border p-4 text-center ${
                  selectedPack === pack.credits
                    ? "border-[var(--mr-blue)] bg-[#eef5ff]"
                    : "border-[var(--mr-border)] bg-white"
                }`}
              >
                <p className="text-[20px] font-bold text-[var(--mr-blue)]">
                  {pack.credits}
                </p>
                <p className="text-[10px] font-semibold text-[var(--mr-muted)]">
                  credits
                </p>
                <p className="mt-1 text-[12px] font-semibold text-[#172033]">
                  {pack.price}
                </p>
              </button>
            ))}
          </div>

          <p className="mt-4 text-[10px] text-[#9a7342]">
            Individual credits are billed at a higher rate than subscription credits.
          </p>
        </section>

        <section className="rounded-[18px] bg-[var(--mr-blue)] p-5 text-white shadow-[var(--mr-shadow)]">
          <h2 className="text-[16px] font-semibold">Need a Custom Plan?</h2>

          <p className="mt-2 text-[11px] leading-5 text-white/75">
            For research teams and institutions requiring more than 500 credits
            per month.
          </p>

          <button
            type="button"
            className="mt-10 rounded-[12px] bg-white px-5 py-3 text-[12px] font-semibold text-[var(--mr-blue)]"
          >
            Contact Enterprise →
          </button>
        </section>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => router.push("/mission-room/sessions")}
          className="rounded-[14px] bg-[var(--mr-blue)] px-6 py-3 text-[12px] font-semibold text-white"
        >
          Continue to Sessions
        </button>
      </div>
    </div>
  );
}