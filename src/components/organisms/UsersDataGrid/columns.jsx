export default function columns() {
  return [
    { field: 'id', headerName: 'ID', flex: 0.5, hide: true },
    {
      field: 'id_type',
      renderHeader: () => <strong>Type ID</strong>,
      flex: 1
    },
    {
      field: 'id_number',
      renderHeader: () => <strong>Number</strong>,
      flex: 1
    },
    {
      field: 'first_names',
      renderHeader: () => <strong>First names</strong>,
      flex: 1
    },
    {
      field: 'last_names',
      renderHeader: () => <strong>Last names</strong>,
      flex: 1
    },
    {
      field: 'email',
      renderHeader: () => <strong>Email</strong>,
      flex: 1.3
    },
    {
      field: 'vaccine',
      renderHeader: () => <strong>Vaccine</strong>,
      flex: 1
    },
    {
      field: 'vaccination_state',
      renderHeader: () => <strong>Vaccination state</strong>,
      flex: 1.2,
      type: 'boolean'
    },
    {
      field: 'vaccination_date',
      renderHeader: () => <strong>Vaccination date</strong>,
      flex: 1.2,
      type: 'date'
    },
    {
      field: 'number_doses',
      renderHeader: () => <strong>Doses</strong>,
      type: 'number',
      flex: 0.6
    },
    {
      field: 'phone_number',
      renderHeader: () => <strong>Phone</strong>,
      flex: 1
    },
    {
      field: 'address',
      renderHeader: () => <strong>Address</strong>,
      flex: 1
    },
    {
      field: 'create_at',
      renderHeader: () => <strong>Create at</strong>,
      hide: true,
      flex: 1
    },
    {
      field: 'role',
      renderHeader: () => <strong>Role</strong>,
      hide: true,
      flex: 1
    },
    {
      field: 'password',
      renderHeader: () => <strong>Password</strong>,
      hide: true,
      flex: 1
    }
  ];
}
