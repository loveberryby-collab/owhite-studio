"use client";

import { automationTags } from "@/data/stack";

export default function AutomationTags() {
  const doubled = [...automationTags, ...automationTags];

  return (
    <div className="mt-16">
      <h3 className="mb-6 text-center text-lg font-semibold text-white">
        Что можно автоматизировать
      </h3>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0b1120]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0b1120]" />
        <div className="animate-marquee flex gap-4 whitespace-nowrap">
          {doubled.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="inline-block shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
