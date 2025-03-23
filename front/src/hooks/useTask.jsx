import { useContext } from "react";
import TaskContext from "../context/TaskProvider";

export function useTask() {
  return useContext(TaskContext);
};