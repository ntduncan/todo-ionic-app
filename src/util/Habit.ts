import { Color } from "./Color.enum";
import { Frequency } from "./Frequency.enum";

export default class Habit {
    public name: string = 'jordan'; //added this code since i was getting an error that these properties didn't exist when typing an object to this class
    public goal: number = 0;
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