'use client'
import { useState } from "react";
import { KanbanProps } from "./Kanban.props";
import { Column, Trash } from "..";
import cn from 'classnames';
import { ColumnEnum } from "@/enums";
import { Task } from "@/interfaces";


// All tasks that will be on start
const tasksArr: Task[] = [
    { title: "Закончить Kanban доску", id: "1", column: ColumnEnum.doing },
    { title: "Изучить FramerMotion", id: '2', column: ColumnEnum.backlog },
    { title: "Устроиться на стажировку", id: "3", column: ColumnEnum.backlog },
    { title: "Захватить власть", id: "4", column: ColumnEnum.backlog },
    { title: "Создать кнопку \'Скачать\' в paint-brush", id: "5", column: ColumnEnum.todo, },
    { title: "Закончить колледж", id: "6", column: ColumnEnum.todo },
    { title: "Сделать МРТ кисти", id: "7", column: ColumnEnum.todo },
    { title: "Пройти курс по Next", id: "8", column: ColumnEnum.doing, },
    { title: "Изучить ветвление в Git", id: "9", column: ColumnEnum.todo },
    { title: "Cделать корзину интернет магазина", id: "10", column: ColumnEnum.done, },
]


const Kanban = ({ className, ...props }: KanbanProps) => {
    const [tasks, setTasks] = useState<Task[]>(tasksArr)

    return (
        <div className={cn("flex gap-6 p-12 overflow-scroll h-full w-full", className)}
            {...props}
        >
            <Column
                title="Бэклог"
                column={ColumnEnum.backlog}
                headingColor="text-neutral-500"
                cards={tasks}
                setCards={setTasks}
            />

            <Column
                title="Сделать"
                column={ColumnEnum.todo}
                headingColor="text-yellow-200"
                cards={tasks}
                setCards={setTasks}
            />

            <Column
                title="В процессе"
                column={ColumnEnum.doing}
                headingColor="text-blue-200"
                cards={tasks}
                setCards={setTasks}
            />

            <Column
                title="Готово"
                column={ColumnEnum.done}
                headingColor="text-emerald-200"
                cards={tasks}
                setCards={setTasks}
            />

            <Trash setTasks={setTasks} className="self-center mx-auto" />
        </div>
    )
}


export { Kanban }