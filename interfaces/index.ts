import { ColumnEnum } from "@/enums";

export interface Task {
    title: string;
    id: string;
    column: ColumnEnum;
}