"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Settings, AddTask } from "./";

const ModalContainer = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const settingsModal = searchParams.get("settings");
  const addTaskModal = searchParams.get("add-task");
  const taskModal = searchParams.get("task");

  return (
    <>
      {settingsModal || addTaskModal || taskModal ? (
        <div
          className="z-50 fixed top-0 left-0 flex justify-center items-end md:items-center w-full h-full bg-black bg-opacity-50"
        >
          {settingsModal && <Settings />}
          {addTaskModal && <AddTask />}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default ModalContainer;
