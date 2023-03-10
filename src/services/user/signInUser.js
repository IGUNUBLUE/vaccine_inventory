import providers from '../../providers';
import models from '../../db/models';

export default async function signInUser({ email, password }) {
  const { data, error } = await providers.supabase
    .from(models.users)
    .select('*')
    .eq('email', email)
    .eq('password', password);

  return { data, error };
}
