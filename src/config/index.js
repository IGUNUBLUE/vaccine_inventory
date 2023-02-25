const config = {
  supabase: {
    ProjectUrl: import.meta.env.VITE_SUPABASE_PROJECT_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
  },
  paths: {
    home: '/',
    dashboard: '/dashboard'
  }
};

export default config;
