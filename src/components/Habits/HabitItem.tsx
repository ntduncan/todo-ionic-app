import { IonItem } from "@ionic/react";
import { Link, NavLink } from "react-router-dom";
import Habit from "../../util/Habit";

interface ContainerProps {
  item: Habit;
  id: number;
}

const HabitItem: React.FC<ContainerProps> = ({ item, id }) => {
  return (
    // ${key}
    <Link to={{pathname: '/tab1/detail', state: { details: item} }}> 
      <IonItem>
        <h1>
          {item?.name}
          {item?.goal}
        </h1>
      </IonItem>
    </Link>
  );
};

export default HabitItem;
