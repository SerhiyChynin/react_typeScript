import React, {useEffect, useState} from 'react';
import Card, { CardVariant }  from './component/Card';
import UserList from './component/UserList';
import List from './component/List';
import { IUser } from './types/types';
import { ITodo } from './types/types';
import axios from 'axios';
import UserItem from './component/UserItem';
import TodoItem from './component/TodoItem';
import EventsExample from './component/EventsExample';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import TodosPage from './component/TodosPage';
import UsersPage from './component/UsersPage';
import UserItemPage from './component/UserItemPage';
import TodoItemPage from './component/TodoItemPage';

const App = () => {
  // const users: IUser[] = [
  //   {
  //   "id": 1,
  //   "name": "Leanne Graham",
  //   "email": "Sincere@april.biz",
  //   "address": {city: 'Kyiv', street: 'Demiivska', zipcode:'100300'},
  // },
  // {
  //   "id": 2,
  //   "name": "Ervin Howell",
  //   "email": "Shanna@melissa.tv",
  //   "address": {city: 'Kyiv', street: 'Lva Tolstogo', zipcode:'100100'},
  //   },]
  
  return (
    <BrowserRouter>
      <div>
        <div style={{ padding: 20}}>
          <NavLink to={'/users' } style={{ padding: 10}}>Users </NavLink>
          <NavLink to={'/todos' } style={{ padding: 10}}>TodoList </NavLink>
          <NavLink to={'/examples' } style={{ padding: 10}}>Examples </NavLink>
          <NavLink to={'/user/:id' } style={{ padding: 10}}>User </NavLink>
          <NavLink to={'/todo/:id' } style={{ padding: 10}}>Todo </NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>}/> 
          <Route path={'/todos'} element={<TodosPage/>}/> 
          <Route path={'/examples'} element={<EventsExample/>}/> 
          <Route path={'/user/:id'} element={<UserItemPage/>}/> 
          <Route path={'/todo/:id'} element={<TodoItemPage/>}/> 
        </Routes>
      </div>
      {/* <EventsExample/> */}
      {/* <UserList users={users} /> */}
    </BrowserRouter>
  )
};

export default App;