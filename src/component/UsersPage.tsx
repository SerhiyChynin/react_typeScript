import React, {FC} from "react";
import { useState, useEffect } from 'react';
import { IUser, ITodo } from "../types/types";
import List from "./List";
import axios from "axios";
import UserItem from "./UserItem";
import { useNavigate} from "react-router-dom";


const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useNavigate();

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
          <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => history('/user/' + user.id)} user={user} key={user.id} />} />
        </div>
    )
}

export default UsersPage;