import { ITodo } from '../types/types';
import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import List from "./List";
import TodoItem from './TodoItem';



const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

        useEffect(() => {
    fetchTodos()

  }, []);

    
    async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      // console.log(response.data);
      setTodos(response.data)
    }
    catch (er) {
      alert(er)
    }
  }

    return (
        <div>
        <List items={todos} renderItem={(todo: ITodo)=> <TodoItem todo={todo} key={todo.id}/>} />

        </div>
    )
}

export default TodosPage;