'use client'
import { useState } from "react";
import { DropIndicator } from "..";
import { TaskProps } from "./Task.props";
import { motion } from 'framer-motion';

const Task = ({ title, column, _id, handleDragStart }: TaskProps) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(title);

    const task = (
        <motion.div className={"bg-neutral-800 border border-neutral-500 rounded p-3 cursor-grab"}
            onDragStart={(e) => handleDragStart(e as unknown as React.DragEvent<Element>, { title, column, id: _id })}
            draggable={true}
            layout
            layoutId={`${_id}`}
            onDoubleClick={() => setEditing(true)}
        >
            {text}
        </motion.div>
    )

    const textArea = (
        <textarea className="w-full border border-violet-400 bg-violet-400/20 p-3  text-neutral-50 placeholder-violet-300 focus:outline-none rounded"
            defaultValue={text}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)}
            onBlur={() => setEditing(false)}
        ></textarea>

    )

    return (
        <>
            <DropIndicator beforeId={String(_id)} column={column} />

            {editing ? textArea : task}
        </>
    )
}

export { Task }