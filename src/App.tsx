import React, {useEffect, useState} from 'react';
import Card, { CardVariant }  from './component/Card';
import UserList from './component/UserList';
import List from './component/List';
import { IUser } from './types/types';
import axios from 'axios';
import UserItem from './component/UserItem';
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
  
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      // console.log(response.data);
      setUsers(response.data)
    }
    catch (er) {
      alert(er)
    }
  }


  return (
    <div>
      <Card onClick={(num:number)=> console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Tap me!</button>
        <div>Hello World!</div>
      </Card>
      {/* <UserList users={users} /> */}
      <List items={users} renderItem={(user: IUser)=> <UserItem user={user} key={user.id}/>} />
    </div>
  )
};

export default App;