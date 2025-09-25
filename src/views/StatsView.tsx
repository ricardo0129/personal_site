import React from "react";

interface StatsViewProps {
  stats: string[];
}

export default function StatsView({ stats }: StatsViewProps) {
  return (
    <div className="p-4 space-y-4">
      <div className="text-lg font-bold text-white">Codeforces</div>
      <div>
        Current Rating: {stats[0]} <br />
        Max Rating: {stats[1]} <br />
        Rank: {stats[2]} <br />
        Max Rank: {stats[3]} <br />
        Problems Solved: {stats[4]} <br />
      </div>
    </div>
  );
}
