import React, {FC} from "react";
import { useState, useEffect } from 'react';
import { IUser, ITodo } from "../types/types";
import List from "./List";
import axios from "axios";
import UserItem from "./UserItem";


const UsersPage: FC = () => {
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
      <List items={users} renderItem={(user: IUser)=> <UserItem user={user} key={user.id}/>} />

        </div>
    )
}

export default UsersPage;