import { IonItem } from '@ionic/react';
import Habit from '../../util/Habit';

interface ContainerProps {
    item: Habit;
}


const HabitItem: React.FC<ContainerProps> = ({ item }) => {
  return (
    <IonItem>
      <h1>{item.name}{item.goal}</h1>
    </IonItem>
  );
};

export default HabitItem;
