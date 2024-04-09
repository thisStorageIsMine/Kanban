'use client'
import { useState } from "react"
import { TrashProps } from "./Trash.props"
import cn from 'classnames'

const Trash = ({ setTasks, className, ...props }: TrashProps) => {
    const [active, setActive] = useState<boolean>(false)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setActive(true)
    }

    const handleDragLeave = () => {
        setActive(false);
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()

        const deletedTaskId = e.dataTransfer.getData('taskId');

        setTasks(tasks => tasks.filter(t => t.id !== deletedTaskId));
        setActive(false);
    }

    return (
        <div className={cn(`w-56 h-56 shrink-0 -order-1 border flex justify-center items-center rounded-md ${active ? "bg-red-800/50 border-red-900 text-red-400" : "bg-neutral-800/50 border-neutral-800 "}`, className)}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={handleDrop}
            {...props}
        >


            {active ?
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-400/50 w-[30px] animate-bounce" viewBox="0 0 384 512"><path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" className="fill-neutral-400/50 w-[30px]" viewBox="0 0 448 512" ><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>}
        </div>
    )

}

export { Trash }