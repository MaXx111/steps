import { useState } from 'react'
import { v4 } from 'uuid';
import { IStepsData } from '../model'
import { StepItem } from './StepItem'


interface StepsFormProps {
    onSubmit: (step: IStepsData) => void,
    onRemove: (id: string) => void,
    data: IStepsData[]
}

export function StepsForm({ onSubmit, onRemove, data}: StepsFormProps) {

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newStep : IStepsData= {
            id: v4(),
            way: Number(way),
            date: date
        }

        onSubmit(newStep);

        setDate('');
        setWay(0);
    }

    
    const [date, setDate] = useState('');

    const dateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const [way, setWay] = useState(0);

    const wayHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWay(Number(event.target.value))
    }

    const changeHandler = (id: string, way: number, date: string) => {
        onRemove(id)
        setWay(way)
        setDate(date)
    }

    return (
        <>

        <form onSubmit={formHandler}> 
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input type="text" id="date" value={date} onChange={dateHandler}/>
            <label htmlFor="way">Пройдено км:</label>
            <input type="text" id="way" value={way} onChange={wayHandler}/>
            <button type="submit">ОК</button>
        </form>

         <StepItem data={data} onRemove={onRemove} onChange={changeHandler}/>

         </>
    )
}