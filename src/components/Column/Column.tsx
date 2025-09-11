import clsx from 'clsx';
import styles from './Column.module.scss';
import type { Todo as TodoProps, TodoStatus } from '../../service/api';
import { Todo } from '../Todo/Todo';
import { DropTarget } from '../ui/DragDrop/DropTarget';
import React from "react";

interface ColumnProps {
    title: string;
    status: TodoStatus;
    todos: TodoProps[];
}


/**
 * A single Column that contains multiple Todos and a DropTarget area
 * @param props
 * @constructor
 */
export const Column = (props: ColumnProps) => {

    const [todos, setTodos] = React.useState<TodoProps[]>(props.todos);

    const showPlaceholder = (id?: string) => {
        if (!id) return;

        // Change the status and position of the todo in the todos array
        setTodos(prev => {
            // If the todo is already in the list, remove it
            const filtered = prev.filter(todo => todo.id !== id);

            // Find the index of the todo that is being dragged over
            const index = filtered.findIndex(todo => todo.status === props.status);

            if (index === -1) {
                filtered.push(todos.find(todo => todo.id === id)!);
            }
            else {
                filtered.splice(index, 0, todos.find(todo => todo.id === id)!);
            }

            return filtered;
        });
    }

    return (
        <div className={styles.Column}>
            <div className={styles.Title}>
                <span className={clsx(styles.Status, styles[`--status-${props.status}`])}></span>
                {props.title} ({props.todos?.length || 0})
            </div>

            <DropTarget
                className={styles.Content}
                id={props.status}
                onDragEnter={showPlaceholder}
            >
                {todos.map(todo => (

                    <Todo key={todo.id} {...todo} />

                ))}
            </DropTarget>
        </div>
    )
}