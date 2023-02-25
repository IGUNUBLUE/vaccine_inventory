import useAppStore from '../../store';

export default function useSetUserState() {
  const { user, setUser } = useAppStore((state) => state);

  function saveUserState({
    email,
    id,
    phoneNumber,
    createdAt,
    idNumber,
    firstNames,
    lastNames,
    birthdays,
    address,
    vaccinationState,
    vaccinationDate,
    vaccine,
    numberDoses,
    idType,
    role
  }) {
    return setUser({
      email,
      id,
      phoneNumber,
      createdAt,
      idNumber,
      firstNames,
      lastNames,
      birthdays,
      address,
      vaccinationState,
      vaccinationDate,
      vaccine,
      numberDoses,
      idType,
      role
    });
  }

  function saveUserNull() {
    setUser(null);
  }

  return { user, saveUserState, saveUserNull };
}
