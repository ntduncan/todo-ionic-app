import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';


export default function handler(req, res) {
  if(req.method === 'POST'){
      res.json("POST SON!!")
  }
  if(req.method === 'GET'){
      res.json(<IonLabel>HomePage for our fricken cool app</IonLabel>)
  }
}