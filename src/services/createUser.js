import providers from '../providers';

export default async function createUser({ email, password }) {
  const { data, error } = await providers.supabase.auth.signUp({
    email,
    password
  });

  return { data, error };
}
