import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Task } from "@/interfaces";

export interface TrashProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setTasks: Dispatch<SetStateAction<Task[]>>
}