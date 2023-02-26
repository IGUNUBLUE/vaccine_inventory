import { useEffect, useState } from 'react';
// import useAlert from '../common/useAlert';
import useSetEmployeesState from '../common/useSetEmployeesState';
import useSelectedEmployees from '../common/useSelectedEmployees';
// import updateEmployees from '../../services/employees/updateEmployees';

export default function useEditEmployees() {
  const {
    selectedEmployees: [currentEmp]
  } = useSelectedEmployees();
  const { employees } = useSetEmployeesState();
  const [foundEmployee, setFoundEmployee] = useState();

  useEffect(() => {
    const found = employees?.find(({ id }) => id === currentEmp);
    setFoundEmployee(found);
  }, []);

  return { foundEmployee };
}
