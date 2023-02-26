const config = {
  supabase: {
    ProjectUrl: import.meta.env.VITE_SUPABASE_PROJECT_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
  },
  paths: {
    home: '/',
    dashboard: '/dashboard',
    dashboardAdmin: '/dashboard/admin',
    dashboardUser: '/dashboard/user',
    adminEditEmployees: '/dashboard/admin/employees/edit'
  }
};

export default config;
