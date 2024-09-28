"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import dayjs from "dayjs";

import { DateSelector, PrioritySelector, ProjectSelector } from "../task";

import { useApp } from "@/context";

const AddTask = () => {
  const { addTask } = useApp();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [taskName, setTaskName] = useState("");
  const [taskDescrip, setTaskDescrip] = useState("");
  const [priority, setPriority] = useState(0);
  const [dueDate, setDueDate] = useState(dayjs());
  const [project, setProject] = useState("inbox");

  const handleAddTask = async () => {
    setLoading(true);

    await addTask(taskName, taskDescrip, dueDate, priority, project);     
    
    setLoading(false);
    router.push("/app");
  }

  return (
    <div className="w-full sm:max-w-[600px] bg-gray-100 dark:bg-zinc-950 border-2 border-gray-200 dark:border-zinc-800 rounded-t-xl md:rounded-xl">
      <div className="flex justify-between items-center py-5 md:py-4 px-4 md:px-6 border-b-2 border-gray-200 dark:border-zinc-800">
        <h2 className="font-semibold text-xl">Add Task</h2>
        <Link href="/app">
          <span className="stroke-black dark:stroke-white">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16998 14.83L14.83 9.17004"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>

      <div className="flex flex-col gap-3 py-5 md:py-6 px-4 md:px-5">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          name="task-name"
          placeholder="Task Name"
          className="w-full py-3 px-3 bg-transparent border-2 border-gray-200 dark:border-zinc-800 placeholder:dark:text-zinc-500 rounded-xl"
        />

        <textarea
          name="task-description"
          value={taskDescrip}
          rows={4}
          onChange={(e) => setTaskDescrip(e.target.value)}
          placeholder="Text Description"
          className="resize-none w-full py-3 px-3 bg-transparent border-2 border-gray-200 dark:border-zinc-800 placeholder:dark:text-zinc-500 rounded-xl"
        />

        <div className="pt-2 flex gap-3">
          <DateSelector dueDate={dueDate} setDueDate={setDueDate} />
          <PrioritySelector priority={priority} setPriority={setPriority} />
        </div>
      </div>

      <div className="flex justify-between items-center py-3 px-6 border-t-2 border-gray-200 dark:border-zinc-800">
        <ProjectSelector project={project} setProject={setProject} />
        <button
          onClick={() => handleAddTask()}
          className="font-semibold py-2 px-3 bg-primaryLight dark:bg-primaryDark text-white hover:text-black dark:text-black dark:hover:text-white hover:bg-gray-200 hover:dark:bg-zinc-800 hover:bg-opacity-10 transition-all duration-200 rounded-lg"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
