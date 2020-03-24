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

test('when TodoList is loaded with todos, then the todos should be in the list', async () => {
  const todos: Todo[] = [
    { id: 1, text: 'review PR' },
    { id: 2, text: 'update docs' }
  ];
  const { findByText } = render(<Home />);
  await findByText(todos[0].text);
  await findByText(todos[1].text);
});
