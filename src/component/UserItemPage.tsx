import React, { FC } from "react"
import { useState, useEffect } from 'react';
import { IUser, ITodo } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';


type UserItemPageParams = {
    id: string;   
};

const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useNavigate();
  

    useEffect(() => {
    fetchUser()

  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      // console.log(response.data);
      setUser(response.data)
    }
    catch (er) {
      alert(er)
    }
  }
    return (
        <div>
            <button onClick={()=> history('/users')}>Back</button>
            <h1>User {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.street}</div>
        </div>
    )
}

export default UserItemPage