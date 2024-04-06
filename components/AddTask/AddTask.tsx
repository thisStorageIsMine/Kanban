'use client'
import { useState } from "react";
import { AddTaskProps } from "./AddTask.props";
import { Task } from "@/interfaces";


const AddTask = ({ column, setTasks }: AddTaskProps) => {
    const [text, setText] = useState<string>(""),
        [adding, setAdding] = useState<boolean>(false);

    const tasksPlaceholder = [
        'Побриться...',
        'Помыть посуду...',
        'Добавить задачу...',
        'Убрать кошкин туалет...',
        'Поверить в себя...',
        'Найти силы...',
        'Поговорить с друзьями...',
        'Обнять маму...',
        'Приготовить ужин...',
        'Отцентровать див...'
    ];

    const randomTaskPlaceholder = () => tasksPlaceholder[Math.floor(Math.random() * tasksPlaceholder.length)];

    const btn = (
        <button className="flex items-center text-xs text-neutral-400 hover:text-neutral-200 gap-1.5 px-3 py-1.5 ml-auto"
            onClick={() => setAdding(true)}
        >
            Добавить задачу

            <svg className={'w-3 fill-neutral-400 hover:fill-neutral-200'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
        </button>
    )


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text.trim().length) return;


        const id = crypto.randomUUID();
        const task: Task = {
            title: text.trim(),
            id,
            column
        }

        setTasks((arr: Task[]) => [...arr, task])
        setAdding(false);
    }

    const addform = (

        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea className="w-full border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-none rounded"
                placeholder={randomTaskPlaceholder()}
                onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)}
            ></textarea>

            <div className="flex">
                <button className="ml-auto px-3 py-1.5 text-neutral-400 transition-colors hover:text-neutral-50 rounded text-sm"
                    onClick={() => setAdding(false)}
                >
                    Отмена
                </button>
                <button className="bg-neutral-50 text-neutral-900 transition-colors hover:bg-neutral-300 px-3 py-1.5 rounded text-sm"
                    type="submit"
                >
                    Добавить
                </button>
            </div>
        </form>

    )

    return (
        adding ? addform : btn
    )
}



export { AddTask }


