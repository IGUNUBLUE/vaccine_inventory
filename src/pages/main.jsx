import PopAlert from '../components/organisms/PopAlert';
import SignIn from '../components/organisms/SignIn';
import Store from '../store';

export default function Main() {
  const store = Store((state) => state);

  return (
    <>
      <PopAlert
        open={store.alert.show}
        severity={store.alert.severity}
        message={store.alert.message}
      />
      <SignIn />;
    </>
  );
}
