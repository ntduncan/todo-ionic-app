import { IonContent, IonItem, IonRouterLink, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Link, NavLink, Route, Router } from "react-router-dom";
import Habit from "../../util/Habit";
import HabitDetail from "./HabitDetail";

interface ContainerProps {
  item: Habit;
  id: number;
}

const HabitItem: React.FC<ContainerProps> = ({ item, id }) => {
  return (
    // ${key}
    <IonContent>
      <IonReactRouter>
        <IonItem>
          <h1>
            {item?.name}
            {item?.goal}
          </h1>
        </IonItem>
      <IonRouterOutlet>
      <Route path="tab1/detail" component={HabitDetail}>
        {/* <HabitDetail detail={item}></HabitDetail> */}
        </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonContent>
  );
};

export default HabitItem;
