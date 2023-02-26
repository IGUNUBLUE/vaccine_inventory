import useAppStore from '../../store';

export default function useSelectedEmployees() {
  const { selectedEmployees, setSelectedEmployees } = useAppStore();

  function selectEmployees(employee) {
    if (employee?.length) {
      const current = [employee[employee.length - 1]];

      return setSelectedEmployees(current);
    }

    return setSelectedEmployees(employee);
  }

  return { selectEmployees, selectedEmployees, setSelectedEmployees };
}
