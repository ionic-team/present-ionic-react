import React from 'react';
import { IonCard, IonCardContent, /* snip */ } from '@ionic/react';

const MyComponent = () => (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>Your Daily List</IonCardSubtitle>
      <IonCardTitle>Ionic Apps We Think You'll Love.</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonList>
        <IonItem>
          <IonThumbnail slot="start">
            <IonImg src="assets/img/logo-sworkit.png"></IonImg>
          </IonThumbnail>
          <IonLabel>
            <h3>Sworkit</h3>
            <p>The number one fitness app</p>
          </IonLabel>
        </IonItem>
        /* snip */
      </IonList>
    </IonCardContent>
  </IonCard>
);

export default MyComponent;
