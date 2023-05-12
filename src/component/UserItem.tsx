import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {

    return (
        <>
         <div style={{padding: 15, border: '1px solid grey', width: '50%'}}>
              {user.id}. {user.name}. Email: {user.email}. City: {user.address.city}, street: {user.address.street} {user.address.zipcode}
        </div>
        </>
)
}
export default UserItem;