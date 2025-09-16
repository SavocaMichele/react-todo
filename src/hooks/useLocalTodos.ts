import { useEffect, useState } from "react";
import type { Todo, TodoStatus } from "../service/api";
import { getTodos, saveTodos } from "../service/local";

/**
 * Custom hook to manage todos stored in local storage.
 * It provides the current list of todos and a function to update a todo's status.
 *
 * @returns An object containing the list of todos, a setter for todos, and a function to update a todo's status.
 */
export function useLocalTodos() {
    const [todos, setTodos] = useState<Todo[]>(() => getTodos());

    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    const updateTodoStatus = (
        id: string,
        status: TodoStatus,
        preview: boolean = false
    ) => {
        setTodos(prev =>
            prev.map(todo => todo.id === id ? { ...todo, status, preview, updatedAt: new Date() } : todo)
        );
    };

    return { todos, setTodos, updateTodoStatus };
}
