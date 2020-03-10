import React from 'react';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonItem, IonButton, IonIcon
} from '@ionic/react';

const MyComponent = () => (
  <IonCard>
    <IonImg src="assets/img/madison.jpg"></IonImg>
    <IonCardContent>
      <IonCardHeader>
        <IonCardSubtitle>Destination</IonCardSubtitle>
        <IonCardTitle>Madison, WI</IonCardTitle>
      </IonCardHeader>
      <p>
        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, 
        Madison was named the capital of the Wisconsin Territory in 1836.
      </p>
      <IonItem>
        <IonButton fill="solid">Learn More</IonButton>
        <IonIcon icon={heart} slot="end"></IonIcon>
        <IonIcon icon={share} slot="end"></IonIcon>
      </IonItem>
    </IonCardContent>
  </IonCard>
);

export default MyComponent;
