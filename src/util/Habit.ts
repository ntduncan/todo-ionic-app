import { Color } from "./Color.enum";
import { Frequency } from "./Frequency.enum";

export default class Habit {
    // public name: string; //added this code since i was getting an error that these properties didn't exist when typing an object to this class
    // public goal: number;
    constructor(
        public name: string, 
        public frequency: Frequency, 
        public goal: number, 
        public isPositive: boolean, 
        public color: Color, 
        public state: {
            checkedRate: number,
            lastUsed: Date,
            isCompleted: boolean
        }){}
}