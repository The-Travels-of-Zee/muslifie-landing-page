"use client";

import useGtag from "@/lib/useGtag";

export default function AnalyticsProvider() {
  useGtag();
  return null; // it just runs the hook, no UI
}
