import React from "react";
import { colorizeText } from "../utils/utils.tsx";

interface ProjectViewProps {
  name: string;
  year: string;
  url: string;
  content: { type: "text" | "image"; content: string }[];
  technologies: string[];
}

export default function ProjectView({
  name,
  year,
  url,
  content,
  technologies,
}: ProjectViewProps) {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">
        {name} [{colorizeText(year)}]
      </h2>
      <div className="my-4 space-y-8">
        {/* Tehnologies used */}
        <div className="flex space-x-2">
          {technologies?.map((tech, idx) => (
            <div key={idx}>{colorizeText(tech)}</div>
          ))}
        </div>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white border border-white px-16 py-2 square hover:bg-blue-500 transition"
          >
            Github
          </a>
        </div>
      </div>
      {content?.map((block, idx) =>
        block.type === "text" ? (
          <p key={idx} className="text-lg">
            {block.content}
          </p>
        ) : block.type === "image" ? (
          <img
            key={idx}
            src={block.content}
            alt={`Project image ${idx + 1}`}
            className="w-full h-auto rounded"
          />
        ) : null,
      )}
    </div>
  );
}
