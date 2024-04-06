'use client'

import { useState } from "react";
import { ColumnProps } from "./Column.props";
import cn from 'classnames';
import { Task, DropIndicator, AddTask } from "..";

const Column = ({ title, headingColor, column, cards, setCards, className, ...props }: ColumnProps) => {
    const [active, setActive] = useState(false);

    const filteredCards = cards.filter(c => c.column === column);


    return (
        <div className={cn("w-64 shrink-0", className)} {...props}>
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-3 text-xl">
                <h3 className={`${headingColor} font-medium`}>{title}</h3>
                <span className={'text-sm text-neutral-400'}>{filteredCards.length}</span>
            </div>

            {/* Список задач */}
            <div className={`h-full w-full flex flex-col transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}>
                {filteredCards.map(card => (
                    <Task key={card.id} title={card.title} column={card.column} _id={String(card.id)} />
                ))}
                <DropIndicator beforeId={-1} column={column} />
                <AddTask setTasks={setCards} column={column} />

            </div>
        </div>
    )
}

export { Column }