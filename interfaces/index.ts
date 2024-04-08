import { ColumnEnum } from "@/enums";

export interface TaskInterface {
    title: string;
    id: string;
    column: ColumnEnum;
}