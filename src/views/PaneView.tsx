import React from "react";
import { colorizeText } from "../utils/utils.tsx";

interface PaneListProps {
  title: string; // Header for the list
  items: string[]; // Array of list items
  activeItem?: string; // Optional: currently selected item
  onSelect?: (item: string) => void; // Callback when an item is clicked
}

export default function PaneList({
  title,
  items,
  activeItem,
  onSelect,
  isHighlighted,
  onPaneClick,
}: PaneListProps) {
  const borderColor = isHighlighted ? "border-blue-500" : "border-white-600";
  return (
    <div
      className={`relative border ${borderColor} square p-2 pt-4`}
      onClick={() => onPaneClick?.(title)}
    >
      {/* Header that cuts the border */}
      <span className="absolute -top-[11px] -left-1 bg-slate-950 font-mono text-white">
        {title}
      </span>

      {/* List items */}
      <div className="flex flex-col space-y-1">
        {items.map((item, idx) => (
          <div
            key={item}
            onClick={() => onSelect?.(item)}
            className={`p-2 cursor-pointer square ${
              activeItem === item && items.length > 1
                ? "bg-gray-800 text-white"
                : "text-white"
            }`}
          >
            {colorizeText(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
