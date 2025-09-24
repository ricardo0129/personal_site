const COLORS: string[] = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-red-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
];
function randomColor(text: string): string {
  const hash = Array.from(text).reduce(
    (acc, char, idx) => acc + char.charCodeAt(0) * (idx + 1),
    0,
  );
  return COLORS[hash % COLORS.length];
}

export function colorizeText(text: string): JSX.Element {
  if (!text) return <></>;
  const parts = text.split(/({{|}})/); // split on markers
  let open = false;

  return (
    <>
      {parts.map((part, i) => {
        if (part === "{{") {
          open = true;
          return null;
        }
        if (part === "}}") {
          open = false;
          return null;
        }
        if (open) {
          return (
            <span key={i} className={randomColor(part)}>
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
