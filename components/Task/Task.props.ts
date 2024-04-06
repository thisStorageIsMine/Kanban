import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ColumnEnum } from "../../enums";

export interface TaskProps {
    title: string;
    column: ColumnEnum;
    _id: string;
}