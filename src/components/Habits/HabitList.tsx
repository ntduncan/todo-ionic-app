import { IonList, IonItem, IonLabel } from '@ionic/react';
import HabitItem from './HabitItem'

interface ContainerProps {
  name: string;
}

const data = [
    {
    name: 'eat a pizza',
    goal: 3,
    isPositive: false,
    color: 'red',
    state: {
        checkRate: 0,
        lastUsed: new Date(),
        isComplete: false,
    }
},
    {
    name: 'practice backflip',
    goal: 7,
    isPositive: true,
    color: 'blue',
    state: {
        checkRate: 0,
        lastUsed: new Date(),
        isComplete: false,
    }
},
    {
    name: 'watch max\'s tutorial',
    goal: 10,
    isPositive: true,
    color: 'green',
    state: {
        checkRate: 0,
        lastUsed: new Date(),
        isComplete: false,
    }
},
]

const HabitList: React.FC<ContainerProps> = ( { name }) => {
  return (
    <IonList>
    {data.map((item, index) => {
      return (
        <IonItem key={index}>
          <HabitItem item={item}></HabitItem>
        </IonItem>
      )
    })}
  </IonList>
  );
};

export default HabitList;
