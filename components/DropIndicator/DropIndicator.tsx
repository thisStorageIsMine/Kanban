import { DropIndicatorProps } from "./DropIndicator.props"

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
    return (
        <span className="block my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
            data-before={beforeId || -1}
            data-column={column}
        >

        </span>
    )
}


export { DropIndicator }