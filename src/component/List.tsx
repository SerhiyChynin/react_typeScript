import React,{FC} from 'react';

interface ListProps<T> {
    items: T[]; //массив с данными любого типа. Поэтому дженерик Т
    renderItem: (item: T) => React.ReactNode;
}


export default function List<T>(props: ListProps<T>) {
    return (
        <>
        {props.items.map(props.renderItem)}
        </>
    )
}


