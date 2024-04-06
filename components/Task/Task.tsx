import { DropIndicator } from "..";
import { TaskProps } from "./Task.props";
import cn from 'classnames'

const Task = ({ title, column, _id }: TaskProps) => {
    return (
        <>
            <DropIndicator beforeId={_id} column={column} />
            <div className={"bg-neutral-800 border border-neutral-500 rounded p-3 cursor-grab"}

                draggable={true}
            >
                {title}
            </div>
        </>
    )
}

export { Task }