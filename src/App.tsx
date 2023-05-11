import React from 'react';
import Card, { CardVariant }  from './component/Card';
import UserList from './component/UserList';
import { IUser } from './types/types';
const App = () => {
  const users: IUser[] = [
    {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {city: 'Kyiv', street: 'Demiivska', zipcode:'100300'} 
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "address": {city: 'Kyiv', street: 'Demiivska', zipcode:'100300'} 
    }]
  
  return (
    <div>
      <Card onClick={(num:number)=> console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Tap me!</button>
        <div>Hello World!</div>
      </Card>
      <UserList users={users}/>
    </div>
  )
};

export default App;