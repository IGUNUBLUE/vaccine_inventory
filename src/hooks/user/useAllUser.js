import { useEffect, useState } from 'react';
import getAllUsers from '../../services/getAllUsers';

export default function useAllUsers() {
  const [users, setUsers] = useState();
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    getAllUsers()
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setUsersLoading(false));
  }, []);

  return { users, usersLoading };
}
