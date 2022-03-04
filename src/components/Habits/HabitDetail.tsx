import { IonCard, IonContent, IonItem } from '@ionic/react';
import Habit from '../../util/Habit';

interface ContainerProps {
    detail: Habit
}


const HabitDetail: React.FC<ContainerProps> = ({ detail }) => {
  return (
      <IonContent>
        <IonCard>
            <IonItem>
                <h1>{detail?.name}</h1>
            </IonItem>
        </IonCard>
    </IonContent>
  );
};

export default HabitDetail;
