import providers from '../../providers';
import models from '../../db/models';
import constants from '../../common/constants';

export default async function getAllEmployees() {
  const { data, error } = await providers.supabase
    .from(models.users)
    .select('*')
    .eq('role', constants.roles.user);

  return { data, error };
}
