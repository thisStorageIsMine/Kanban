import { ColumnEnum } from "@/enums";
import { TaskInterface } from "@/interfaces";
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface ColumnProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    headingColor: string;
    column: ColumnEnum;
    tasks: TaskInterface[];
    setTasks: Dispatch<SetStateAction<TaskInterface[]>>;
}