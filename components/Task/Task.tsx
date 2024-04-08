'use client'
import { DropIndicator } from "..";
import { TaskProps } from "./Task.props";
import { motion } from 'framer-motion';

const Task = ({ title, column, _id, handleDragStart }: TaskProps) => {
    return (
        <>
            <DropIndicator beforeId={String(_id)} column={column} />
            <motion.div className={"bg-neutral-800 border border-neutral-500 rounded p-3 cursor-grab"}
                onDragStart={(e) => handleDragStart(e as unknown as React.DragEvent<Element>, { title, column, id: _id })}
                draggable={true}
                layout
                layoutId={`${_id}`}
            >
                {title}
            </motion.div>
        </>
    )
}

export { Task }