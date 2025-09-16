export type Todo = {
    id: string;
    title: string;
    body: string;
    status: TodoStatus;
    priority: TodoPriority;
    createdAt: Date;
    updatedAt: Date;

    preview?: boolean
}

export type Column = {
    id: TodoStatus;
    title: string;
}

export type TodoStatus = 'todo' | 'in-progress' | 'done';

export type TodoPriority = 'normal' | 'low' | 'medium' | 'high';