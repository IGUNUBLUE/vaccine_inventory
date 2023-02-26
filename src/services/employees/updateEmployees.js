import providers from '../../providers';
import models from '../../db/models';

export default async function updateEmployees(employee) {
  const { data, error } = await providers.supabase
    .from(models.users)
    .update({ ...employee })
    .eq('id', employee.id);

  return { data, error };
}
