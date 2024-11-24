"use client";

import React from "react";
import Image from "next/image";

import { timelineData } from "@/config/landing";
import { Timeline } from "@/components/ui/timeline";

export function LearningTimeline() {
  const data = timelineData.map((el) => ({
    title: el.title,
    content: (
      <div>
        <p className="mb-6 text-xs font-bold text-neutral-800 dark:text-neutral-200 md:text-2xl">
          {el.description}
        </p>
        <div className="mb-8">
          {el.points.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 md:text-sm"
            >
              ✅ {point}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {el.images.map((image, i) => (
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
