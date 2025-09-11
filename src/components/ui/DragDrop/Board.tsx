import styles from './DragDrop.module.scss'
import {type Column as ColumnType, type Todo, TODOS, type TodoStatus} from "../../../service/api";
import {useEffect, useState} from "react";
import {Column} from "../../Column/Column";
import {monitorForElements} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';


interface BoardProps {
    columns: ColumnType[]
}


/**
 * A Board that contains multiple Columns and handles the overall drag-and-drop logic.
 * On drag-and-drop, it updates the status of the Todo items accordingly.
 *
 * @param props
 * @constructor
 */
export const Board = (props: BoardProps) => {
    
    const [columns, setColumns] = useState<ColumnType[]>(props.columns);
    const [todos, setTodos]     = useState<Todo[]>(TODOS);

    const getTodosByStatus = (status: TodoStatus): Todo[] => {
        return todos.filter(todo => todo.status === status);
    }

    useEffect(() => {
        const cleanup = monitorForElements({
            onDrop({source, location}) {
                const destination = location.current.dropTargets[0];
                if (!destination) return;

                const sourceId = source.data.id as string;
                const destId   = destination.data.id as TodoStatus;

                /** Update the todo's status based on the drop target */
                setTodos(prev => prev.map(todo => {
                    if (todo.id === sourceId) {

                        return {
                            ...todo,
                            status: destId
                        }
                    }
                    return todo;
                }));
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