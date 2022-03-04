import { IonList, IonItem, IonLabel } from '@ionic/react';
import Habit from '../../util/Habit';
import { Frequency } from '../../util/Frequency.enum';
import {Color} from '../../util/Color.enum'
import HabitItem from './HabitItem'

interface ContainerProps {
  name: string;
}

const data = [
    new Habit('eat a pizza', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
    new Habit('jump on trampoline', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
    new Habit('run', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false}),
    new Habit('fall over', Frequency.DAILY, 3, false, Color.RED, {checkedRate:0, lastUsed:new Date(), isCompleted:false})
]

const HabitList: React.FC<ContainerProps> = ( { name }) => {
  return (
    <IonList>
    {data.map((item, index) => {
      return (
        <IonItem key={index}>
          <HabitItem item={item} id={index}></HabitItem>
        </IonItem>
      )
    })}
  </IonList>
  );
};

export default HabitList;
