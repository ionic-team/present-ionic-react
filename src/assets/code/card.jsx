import React from 'react';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonItem, IonButton, IonIcon
} from '@ionic/react';

const MyComponent = () => (
  <IonCard>
    <IonImg src="/assets/myImg.png"></IonImg>
    <IonCardContent>
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>
      <p>
        Here’s a small text description for the card component.
        Nothing more, nothing less.
      </p>
      <IonItem>
        <IonButton fill="solid">Action</IonButton>
        <IonIcon icon={heart} slot="end"></IonIcon>
        <IonIcon icon={share} slot="end"></IonIcon>
      </IonItem>
    </IonCardContent>
  </IonCard>
);

export default MyComponent;