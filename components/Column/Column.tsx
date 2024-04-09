'use client'

import { useState } from "react";
import { ColumnProps } from "./Column.props";
import cn from 'classnames';
import { Task, DropIndicator, AddTask } from "..";
import { TaskInterface } from "@/interfaces";

const Column = ({ title, headingColor, column, tasks, setTasks, className, ...props }: ColumnProps) => {
    const [active, setActive] = useState(false);

    const filteredCards = tasks.filter(c => c.column === column);

    const handleGradStart = (e: React.DragEvent, task: TaskInterface) => {
        e.dataTransfer.setData("taskId", task.id);
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();

        hideIndicators();
        highlightIndicator(e);
        setActive(true);
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();

        setActive(false);
        hideIndicators();
        changeTaskPosition(e);

    }

    const handleDragLeave = () => {
        setActive(false);
        hideIndicators();
    };

    const highlightIndicator = (e: React.DragEvent) => {
        const indicators = getIndicators();
        const currentIndicator = getNearestIndicator(e, indicators);

        currentIndicator.child.style.opacity = "1";
    }

    const getIndicators = () => Array.from(document.querySelectorAll(`[data-column='${column}']`)) as HTMLSpanElement[];


    const getNearestIndicator = (e: React.DragEvent, ind: HTMLSpanElement[]) => {
        const topBuffer = 50; // Расстояние в пикселях. Добовляет расстояние сверху колонки

        interface ClosestIndicator {
            offset: number;
            child: HTMLSpanElement;
        }

        return ind.reduce((closest: ClosestIndicator, child: HTMLSpanElement) => {
            const rect = child.getBoundingClientRect(); // Координаты элемента

            const curOffset = e.clientY - (rect.top + topBuffer); // Расстояние  от элемента до курсора

            if (curOffset > closest.offset && curOffset < 0) { // ??
                return { offset: curOffset, child };
            } else {
                return closest;
            }


        }, { offset: Number.NEGATIVE_INFINITY, child: ind[ind.length - 1] })
    }

    const hideIndicators = (ind?: HTMLSpanElement[]) => {
        const indicators = ind || getIndicators();

        indicators.forEach(i => i.style.opacity = "0");
    }

    const changeTaskPosition = (e: React.DragEvent) => {
        const draggableTaskId = e.dataTransfer.getData('taskId'), // Id задачи, которую мы перетасктвали
            indicators = getIndicators(),
            dropIndicatorId = getNearestIndicator(e, indicators).child.dataset.before; // id задачи на которую перетащили

        let draggableTask = tasks.find(t => t.id === draggableTaskId), // Задача, которую мы перетаскивали
            dropTask = tasks.find(t => t.id === dropIndicatorId); // Задача, на которую перетащили

        let isDropTaskExist = true; // Проверяем, если задача на которую перетащили. Если нет, тащим задачу в конец списка

        if (!draggableTask) return;
        if (!dropTask) isDropTaskExist = false;

        let draggableTaskIndex = tasks.indexOf(draggableTask), // Индекс задачи, которую мы перетасктвали. 
            dropTaskIndex = (isDropTaskExist) ? tasks.findIndex(t => t.id === dropIndicatorId) : -1; // Индекс задачи, на которую перетащили. 


        if (dropTaskIndex === draggableTaskIndex) return; // Если мы ставим новую задачу на её же место, то это не имеет смысла    

        let newTasks = [...tasks]; // Все задачи, только дальше мы поменяем некоторые из них местами

        draggableTask = { ...draggableTask, column } // Меняем колонки, если перетащили задачу в другую колонку

        if (dropTaskIndex == -1) { // Если перетащили задачу в конец
            newTasks.splice(draggableTaskIndex, 1); // Удалить текущую задачу
            newTasks.push(draggableTask);          // И поставить её в конец
        } else { // Если перетаскивали не в конец
            newTasks = newTasks.filter(t => t.id !== draggableTaskId); // Удаляем задачу

            dropTaskIndex = newTasks.findIndex(t => t.id === dropIndicatorId); // Filter подвинули индексы, надо искать заново
            newTasks.splice(dropTaskIndex, 0, draggableTask) // Вставляем её перед задачей, на которую перетаскивали


        }

        setTasks(newTasks);

    }

    return (
        <div className={cn("w-full shrink-0 md:w-64", className)} {...props}
            onDragLeave={handleDragLeave}
            onDragOver={e => handleDragOver(e)}
            onDrop={e => handleDrop(e)}
        >
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-3 text-xl">
                <h3 className={`${headingColor} font-medium`}>{title}</h3>
                <span className={'text-sm text-neutral-400'}>{filteredCards.length}</span>
            </div>

            {/* Список задач */}
            <div className={`h-full w-full flex flex-col transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}>
                {filteredCards.map(card => (
                    <Task key={card.id} title={card.title} column={card.column} _id={String(card.id)} handleDragStart={handleGradStart} />
                ))}
                <DropIndicator beforeId={String(-1)} column={column} />
                <AddTask setTasks={setTasks} column={column} />

            </div>
        </div>
    )
}

export { Column }