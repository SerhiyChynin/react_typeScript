
import React, {FC, useState} from 'react';


const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget);
        setValue(e.target.value);
     
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        
        console.log(value);
        
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag');
         
    }
    
    const onDargOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log(isDrag);        
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement> ) => {
        console.log('Drop');
        setIsDrag(true);
        console.log(isDrag);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(false);
        console.log(isDrag);
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler} >Tap!</button>
            <div>
                {value}
            </div>
        <div onDrag={dragHandler} draggable style={{width: 200, height: 200, marginBottom: '20px',  background: 'yellowgreen'}}></div>
            <div onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={onDargOverHandler}
                style={{ width: 200, height: 200, marginBottom: '20px', background: isDrag ? 'yellow' : 'red' }}></div>

        </div>
    )
}

export default EventsExample;