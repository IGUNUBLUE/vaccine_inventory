import providers from '../../providers';
import models from '../../db/models';

export default async function signInUser({ email, password }) {
  const { data, error } = await providers.supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) return { data, error };

  const {
    data: [queryData],
    error: queryError
  } = await providers.supabase
    .from(models.userAdditionalInfo)
    .select('*')
    .eq('auth_uuid', data.user.id);

  return {
    data: { session: data.session, user: { ...data.user, ...queryData } },
    error: error || queryError
  };
}
