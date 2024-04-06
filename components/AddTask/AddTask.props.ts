import { ColumnEnum } from "@/enums";
import { Task } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

export interface AddTaskProps {
    column: ColumnEnum;
    setTasks: Dispatch<SetStateAction<Task[]>>;
}