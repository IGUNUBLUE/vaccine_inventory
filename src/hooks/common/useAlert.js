import useAppStore from '../../store';

export default function useAlert() {
  const { alert, setAlert } = useAppStore((state) => state);

  function createAlert({ message, severity, show }) {
    setAlert({
      show,
      severity,
      message
    });
  }

  function finishAlert() {
    setTimeout(
      () =>
        setAlert({
          show: false,
          ...alert
        }),
      5000
    );
  }

  return { createAlert, finishAlert };
}
