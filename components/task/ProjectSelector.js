"use client";

import { useState } from "react";

const ProjectSelector = ({ project, setProject }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const projects = [
    {
      id: "inbox",
    },
    {
      id: "personal",
    },
    {
      id: "work",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => {
          menuVisible ? setMenuVisible(false) : setMenuVisible(true);
        }}
        className="flex items-center gap-2 py-2 px-3 hover:bg-gray-200 hover:dark:bg-zinc-800 bg-opacity-10 border-2 border-gray-200 dark:border-zinc-800 hover:border-transparent transition-all duration-200 rounded-lg"
      >
        {project[0].toUpperCase() + project.slice(1)}
        <span className="stroke-black dark:stroke-white">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {menuVisible && (
        <div className="absolute -bottom-2 -right-40 md:-bottom-10 w-36 flex-col bg-gray-100 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          {projects.map((projectEl) => {
            return (
              <button
                key={projectEl.id}
                onClick={() => {
                  setProject(projectEl.id);
                  setMenuVisible(false);
                }}
                className={`w-full flex items-center justify-between py-2 px-5 hover:bg-gray-200 hover:dark:bg-zinc-800 hover:bg-opacity-10 ${
                  projectEl.id !== 3 && "border-b-2"
                } border-gray-200 dark:border-zinc-800`}
              >
                {projectEl.id[0].toUpperCase() + projectEl.id.slice(1)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectSelector;
