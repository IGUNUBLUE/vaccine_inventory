/* eslint-disable camelcase */
export default function rows(employees) {
  return employees.map(
    ({
      id,
      created_at,
      id_type,
      first_names,
      last_names,
      email,
      birthdays,
      address,
      phone_number,
      vaccination_state,
      vaccine,
      vaccination_date,
      number_doses,
      password,
      role,
      id_number
    }) => ({
      id,
      created_at,
      id_type,
      first_names,
      last_names,
      email,
      birthdays,
      address,
      phone_number,
      vaccination_state,
      vaccine,
      vaccination_date,
      number_doses,
      password,
      role,
      id_number
    })
  );
}
