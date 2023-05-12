
import React, {FC, useState} from 'react';


const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget);
        setValue(e.target.value);
     
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler} >Tap!</button>
        </div>
    )
}

export default EventsExample;