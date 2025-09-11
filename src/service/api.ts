export type Todo = {
    id: string;
    title: string;
    body: string;
    status: TodoStatus;
    priority: TodoPriority;
    createdAt: Date;
    updatedAt: Date;
}

export type Column = {
    id: TodoStatus;
    title: string;
}

export type TodoStatus = 'todo' | 'in-progress' | 'done';

export type TodoPriority = 'normal' | 'low' | 'medium' | 'high';

export const TODOS: Todo[] = [
    { id: '000001', title: 'Todo 1', status: 'todo', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', priority: 'medium', createdAt: new Date(), updatedAt: new Date() },
    { id: '000002', title: 'Todo 2', status: 'in-progress', body: '', priority: 'low', createdAt: new Date(), updatedAt: new Date() },
    { id: '000003', title: 'Todo 3', status: 'in-progress', body: '', priority: 'high', createdAt: new Date(), updatedAt: new Date() },
    { id: '000004', title: 'Todo 4', status: 'todo', body: '', priority: 'normal', createdAt: new Date(), updatedAt: new Date() }
];