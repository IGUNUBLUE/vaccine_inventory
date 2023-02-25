import useAppStore from '../../store';

export default function useSetEmployeesState() {
  const { employees, setEmployees } = useAppStore((state) => state);

  function saveEmployees(data) {
    return setEmployees(data);
  }

  return { employees, saveEmployees };
}
