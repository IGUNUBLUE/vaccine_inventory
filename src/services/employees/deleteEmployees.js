import providers from '../../providers';
import models from '../../db/models';

export default async function deleteEmployees(ids) {
  const { data, error } = await providers.supabase
    .from(models.users)
    .delete()
    .in('id', ids);

  return { data, error };
}
