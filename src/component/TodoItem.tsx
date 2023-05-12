import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <>
        <input type="checkbox" checked={todo.completed} />
            {todo.id}. {todo.title}
        </>
    )
}

export default TodoItem;