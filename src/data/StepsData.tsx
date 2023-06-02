import { v4 } from 'uuid'
import { IStepsData } from '../model'

export let stepsData: IStepsData[] = [
    {
        id: v4(),
        way: 15.4,
        date: '13.12.2022'
    },
    {
        id: v4(),
        way: 16.4,
        date: '13.01.2023'
    },
    {
        id: v4(),
        way: 13.4,
        date: '13.02.2023'
    }
]