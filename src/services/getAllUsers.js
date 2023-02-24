import providers from '../providers';
import models from '../db/models';

export default async function getAllUsers() {
  const { data, error } = await providers.supabase.from(models.users).select();
  return { data, error };
}
