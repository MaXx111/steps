import { StepsForm } from './StepsForm'
import { useState } from 'react';
import { IStepsData } from '../model'
import { stepsData } from '../data/StepsData'

export function Steps() {

    const [data, setStep] = useState(stepsData)

    const submitHandler = (newStep: IStepsData) => {
    let flag = false

       const newData =  data.map(step => {
            if(step.date === newStep.date) {
                step.way += newStep.way;
                flag = true
            }
            return step
        })

        if(flag) {
            setStep([...newData])
            return
        }

        setStep( () => {
            return [...newData, newStep]
        });

    }

    const removeHandler = (id: string) => {
        setStep(() => {
            return data.filter(item => item.id !== id);
        })
    }


    return (
        <div>
            <StepsForm onSubmit={submitHandler} onRemove={removeHandler} data={data} />
        </div>
    )
}