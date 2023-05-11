import React  from 'react';
import { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users: IUser[]}) => {

  return (
    <div>
          {users.map(user => 
              <div key={user.id} style={{padding: 15, border: '1ps solid grey'}}>
                  {user.id}. {user.name}. {user.email}. {user.address.street}
            </div>
            )}
    </div>
  )
};

export default UserList;