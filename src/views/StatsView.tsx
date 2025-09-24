import React from "react";

interface StatsViewProps {
  stats: string[];
}

export default function StatsView({ stats }: StatsViewProps) {
  return <div className="p-4 space-y-4"></div>;
}
