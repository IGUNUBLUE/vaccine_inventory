import useAppStore from '../../store';

export default function useSelectedEmployee() {
  const { selectedEmployee, setSelectedEmployee } = useAppStore();

  function selectEmployee(employee) {
    return setSelectedEmployee(employee);
  }

  return { selectEmployee, selectedEmployee, setSelectedEmployee };
}
