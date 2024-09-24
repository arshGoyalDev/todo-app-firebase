"use client";

import { useSearchParams } from "next/navigation";

import Settings from "./Settings";

const ModalContainer = () => {
  const searchParams = useSearchParams();

  const settingsModal = searchParams.get("settings");
  const addTaskModal = searchParams.get("add-task");
  const taskModal = searchParams.get("task");

  return (
    <>
      {settingsModal || addTaskModal || taskModal ? (
        <div className="z-50 fixed top-0 left-0 flex justify-center items-end md:items-center w-full h-full bg-black bg-opacity-50">
          {settingsModal && <Settings />}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default ModalContainer;
