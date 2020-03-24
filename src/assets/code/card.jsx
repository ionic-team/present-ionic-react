import React from 'react';
import { IonCard, IonCardContent, /* snip */ } from '@ionic/react';

const MyComponent = () => (
  <IonCard>
    <IonImg src="assets/img/madison.jpg"></IonImg>
    <IonCardContent>
      <IonCardHeader>
        <IonCardSubtitle>Destination</IonCardSubtitle>
        <IonCardTitle>Madison, WI</IonCardTitle>
      </IonCardHeader>
      <p>/** snip */</p>
      <IonItem>
        <IonButton fill="solid">Learn More</IonButton>
        <IonIcon icon={heart} slot="end"></IonIcon>
        <IonIcon icon={share} slot="end"></IonIcon>
      </IonItem>
    </IonCardContent>
  </IonCard>
);

export default MyComponent;
