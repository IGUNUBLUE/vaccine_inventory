import useEditEmployees from '../../../hooks/employee/useEditEmployees';
import EmployeeFrom from '../../molecules/EmployeesForm';

export default function EditEmployees() {
  const { foundEmployee } = useEditEmployees();

  return <EmployeeFrom employee={foundEmployee} />;
}
