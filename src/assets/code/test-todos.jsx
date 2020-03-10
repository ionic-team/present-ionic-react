<IonList>
  {todos.map((todo, i) => (
    <IonItem key={i}>
      <IonLabel>
        <h2>{todo.text}</h2>
      </IonLabel>
      <IonIcon data-icon="trash" icon={trash} color="danger" slot="end" />
    </IonItem>
  ))}
</IonList>
