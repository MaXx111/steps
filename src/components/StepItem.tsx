import {IStepsData} from '../model'

interface StepItemProps {
    data: IStepsData[],
    onRemove: (id: string) => void
    onChange: (id: string, way: number, date: string) => void
}

export function StepItem({data, onRemove, onChange} : StepItemProps) {
    
    return (
        <>
            {data.map(step => {
                return <div key={step.id}>
                    {step.date}   {step.way}
                    <button onClick={() => onRemove(step.id)}>X</button>
                    <button onClick={() => onChange(step.id, step.way, step.date)}>!</button>
                </div>
            })}
        </>
    )
}
