import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ColumnEnum } from "../../enums";
import { TaskInterface } from "@/interfaces";

export interface TaskProps {
    title: string;
    column: ColumnEnum;
    _id: string;
    handleDragStart: (e: React.DragEvent, task: TaskInterface) => void;
}