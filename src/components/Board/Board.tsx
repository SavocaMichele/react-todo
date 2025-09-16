import styles from './Board.module.scss'
import {type Column as ColumnType, type Todo, type TodoStatus} from "../../service/api";
import {useEffect, useState} from "react";
import {Column} from "../Column/Column";
import {monitorForElements} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import {useLocalTodos} from "../../hooks/useLocalTodos";


interface BoardProps {
    columns: ColumnType[]
}


/** Transient UI-only state for hover preview */
type PreviewState =
    | { draggingId: string; destStatus: TodoStatus; index: number | null }
    | null;

/**
 * A Board that contains multiple Columns and handles the overall drag-and-drop logic.
 * On drag-and-drop, it updates the status of the Todo items accordingly.
 *
 * @param props
 * @constructor
 */
export const Board = (props: BoardProps) => {

    const [columns, setColumns]         = useState<ColumnType[]>(props.columns);
    const { todos, updateTodoStatus }   = useLocalTodos();

    const getTodosByStatus = (status: TodoStatus): Todo[] => {
        return todos.filter(todo => todo.status === status);
    }

    useEffect(() => {
        const cleanup = monitorForElements({

            /** Insert a preview into the column */
            onDropTargetChange({source, location}) {
                const destination = location.current.dropTargets[0];
                if (!destination) return;

                const sourceId = source.data.id as string;
                const destId   = destination.data.id as TodoStatus;

                updateTodoStatus(sourceId, destId, true);
            },

            /** Finalize the drop by updating the todo's status */
            onDrop({source, location}) {
                const destination = location.current.dropTargets[0];
                if (!destination) return;

                const sourceId = source.data.id as string;
                const destId   = destination.data.id as TodoStatus;

                /** Update the todo's status based on the drop target */
                updateTodoStatus(sourceId, destId, false);
            }
        })

        return cleanup;
    }, []);

    return (
        <div className={styles.Board}>
            {columns.map((column) => (
                <Column
                    status={column.id}
                    title={column.title}
                    todos={getTodosByStatus(column.id)}
                    key={column.id}
                />
            ))}
        </div>
    )

}