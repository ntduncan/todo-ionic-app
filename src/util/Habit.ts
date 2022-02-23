import { Color } from "./Color.enum";
import { Frequency } from "./Frequency.enum";

export default class Habit {
    constructor(
        name: string, 
        frequency: Frequency, 
        goal: number, 
        isPositive: boolean, 
        color: Color, 
        state: {
            checkedRate: number,
            lastUsed: Date,
            isCompleted: boolean
        }){}
}