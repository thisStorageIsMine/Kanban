import { ColumnEnum } from "@/enums";
import { Task } from "@/interfaces";
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface ColumnProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    headingColor: string;
    column: ColumnEnum;
    cards: Task[];
    setCards: Dispatch<SetStateAction<Task[]>>;
}