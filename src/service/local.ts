/**
 * This file is for local purposes only and replaces the need of a database.
 * In a real application, these functions would interact with a backend service or database.
 * */

import type {Todo} from "./api";

/**
 * Creates a set of todos and stores them in local storage.
 * If there are already todos in local storage, it does nothing.
 */
export function createTodos() {
    const existing = localStorage.getItem('todos');
    if (existing) return;

    const now = new Date();
    const todos: Todo[] = [
        {
            id: '1',
            title: 'Learn React',
            body: 'Get familiar with React basics and hooks.',
            status: 'todo',
            priority: 'normal',
            createdAt: now,
            updatedAt: now
        },
        {
            id: '2',
            title: 'Build a Kanban Board',
            body: 'Create a simple Kanban board application using React.',
            status: 'in-progress',
            priority: 'medium',
            createdAt: now,
            updatedAt: now
        },
        {
            id: '3',
            title: 'Test the Application',
            body: 'Ensure all features work as expected and fix any bugs.',
            status: 'done',
            priority: 'high',
            createdAt: now,
            updatedAt: now
        },
        {
            id: '4',
            title: 'Deploy the App',
            body: 'Deploy the application to a hosting service.',
            status: 'todo',
            priority: 'low',
            createdAt: now,
            updatedAt: now
        }
    ];

    localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * Retrieves todos from local storage.
 * @returns An array of todo objects.
 */
export function getTodos() {
    createTodos();

    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

/**
 * Saves the provided todos array to local storage.
 * @param todos - An array of todo objects to be saved.
 */
export function saveTodos(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
}