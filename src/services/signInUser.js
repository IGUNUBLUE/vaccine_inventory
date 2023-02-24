import providers from '../providers';

export default async function getAllUsers({ email, password }) {
  const { data, error } = await providers.supabase.auth.signInWithPassword({
    email,
    password
  });

  return { data, error };
}
