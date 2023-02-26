import PopAlert from '../../components/organisms/PopAlert';
import SignIn from '../../components/organisms/SignIn';
import useAlert from '../../hooks/common/useAlert';

export default function Main() {
  const { alert } = useAlert();

  return (
    <>
      <PopAlert
        open={alert.show}
        severity={alert.severity}
        message={alert.message}
      />
      <SignIn />;
    </>
  );
}
