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

    return (
        <div className={styles.Column}>
            <div className={styles.Title}>
                <span className={clsx(styles.Status, styles[`--status-${props.status}`])}></span>
                {props.title} ({props.todos?.length || 0})
            </div>

            <DropTarget
                className={styles.Content}
                id={props.status}
            >
                {props.todos.map(todo => (

                    <Todo key={todo.id} {...todo} />

                ))}
            </DropTarget>
        </div>
    )
}