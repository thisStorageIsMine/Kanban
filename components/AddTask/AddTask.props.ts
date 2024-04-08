import { ColumnEnum } from "@/enums";
import { TaskInterface } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

export interface AddTaskProps {
    column: ColumnEnum;
    setTasks: Dispatch<SetStateAction<TaskInterface[]>>;
}