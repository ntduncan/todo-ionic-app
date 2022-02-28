import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SignUpForm from '../components/Login/SignUpForm';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SignUpForm />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
