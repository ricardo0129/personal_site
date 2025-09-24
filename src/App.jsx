import { useState, useEffect } from "react";
import PaneList from "./PaneList";
import ProjectView from "./ProjectView";
import { colorizeText } from "./utils/utils.tsx";

export default function App() {
  const [active, setActive] = useState("about");
  const [panes, setPanes] = useState({});
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [mainPage, setMainPage] = useState("about");
  const [mainContent, setMainContent] = useState("[{}]");

  const footer =
    "{{<pgup>/<pgdown>: Scroll, <left>/<right>: Switch section, <1-5>: Jump to section, <up>/<down>: Switch item}} {{(or just use the mouse)}}";

  useEffect(() => {
    fetch("src/data/about.json").then((res) => {
      res.json().then((data) => {
        setPanes(data);
      });
    });
    fetch("src/data/projects.json").then((res) => {
      res.json().then((data) => {
        console.log(data["data"][0]);
        setMainContent(data["data"][0]);
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
      <div className="flex flex-1">
        <div className="flex flex-col space-y-4 w-1/4">
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
        <div className="flex-1 border square border-white-600 m-2 p-4 whitespace-pre-wrap">
          <ProjectView
            name={mainContent["name"]}
            year={mainContent["year"]}
            demoUrl={mainContent["demoUrl"]}
            content={mainContent["content"]}
            technologies={mainContent["technologies"]}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row mt-4">
        <div className="p-2 text-xs"> {colorizeText(footer)} </div>
        <div className="p-2 ml-auto">
          <a
            href="https://github.com/ricardo0129"
            className="text-blue-500 underline"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-ruiz-18701a171/"
            className="text-green-500 underline ml-4"
          >
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/234483123599966208"
            className="text-orange-500 underline ml-4"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
