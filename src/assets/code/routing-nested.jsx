const DashboardPage: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/dashboard" component={UsersListPage} />
      <Route path="/dashboard/users/:id" component={UserDetailPage} />
    </IonRouterOutlet>
  );
};
