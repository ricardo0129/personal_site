import { useState, useEffect } from "react";
import PaneList from "./PaneList";

export default function App() {
  const [active, setActive] = useState("about");
  const [panes, setPanes] = useState({});
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [mainPage, setMainPage] = useState("about");

  const footer =
    "<pgup>/<pgdown>: Scroll, <left>/<right>: Switch section, <1-5>: Jump to section, <up>/<down>: Switch item (or just use the mouse)";

  useEffect(() => {
    fetch("src/data/about.json").then((res) => {
      res.json().then((data) => {
        setPanes(data);
      });
    });
  }, []);

  function paneClick(content, idx) {
    setHighlightedIndex(idx);
    setMainPage(content);
  }

  return (
    <div className="h-screen flex flex-col p-4">
      {/* Main Layout */}
      <div className="flex flex-1 w-30">
        <div className="flex flex-col space-y-4">
          <div className="flex-1 border-gray-600 p-2 space-y-4">
            {Object.keys(panes).map((key, idx) => (
              <PaneList
                key={key}
                title={key}
                items={panes[key]}
                activeItem={active}
                onSelect={setActive}
                isHighlighted={highlightedIndex === idx}
                onPaneClick={(content) => paneClick(content, idx)}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 border square border-white-600 bg-terminal m-2 p-4 whitespace-pre-wrap">
          {mainPage}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row mt-4">
        <div className="p-2 text-xs"> {footer} </div>
        <div className="p-2 text-xs ml-auto">
          <a href="github.com/ricardo0129" className="text-blue underline">
            Github
          </a>
          <a
            href="linkedin.com/in/ricardo0129"
            className="text-green underline ml-4"
          >
            LinkedIn
          </a>
          <a
            href="twitter.com/ricardo0129"
            className="text-orange underline ml-4"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
