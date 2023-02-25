import useAppStore from '../../store';

export default function useSetUserState() {
  const { user, setUser } = useAppStore((state) => state);

  function saveUserState({
    session: { accessToken, refreshToken, tokenType },
    data: {
      email,
      id,
      phoneNumber,
      createdAt,
      idNumber,
      firstNames,
      lastNames,
      birthdate,
      address,
      vaccineState,
      vaccinationDate,
      numberDoses,
      vaccineId,
      roleId,
      typeId,
      authUuid
    }
  }) {
    setUser({
      session: { accessToken, refreshToken, tokenType },
      data: {
        email,
        id,
        phoneNumber,
        createdAt,
        idNumber,
        firstNames,
        lastNames,
        birthdate,
        address,
        vaccineState,
        vaccinationDate,
        numberDoses,
        vaccineId,
        roleId,
        typeId,
        authUuid
      }
    });
  }

  return { user, saveUserState };
}
