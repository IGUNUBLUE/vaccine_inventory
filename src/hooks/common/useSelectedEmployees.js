import useAppStore from '../../store';

export default function useSelectedEmployees() {
  const { selectedEmployees, setSelectedEmployees } = useAppStore();

  function selectEmployees(employee) {
    return setSelectedEmployees(employee);
  }

  return { selectEmployees, selectedEmployees, setSelectedEmployees };
}
