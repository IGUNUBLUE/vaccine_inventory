import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const persistConfig = {
  name: 'store',
  version: 'v1'
};

const useAppStore = create(
  persist(
    (set) => ({
      // Alert store
      alert: { show: false, severity: 'info', message: 'none' },
      setAlert: (payload) => set(() => ({ alert: payload })),
      // User store
      user: null,
      setUser: (payload) => set(() => ({ user: payload })),
      // Employees store
      selectedEmployee: [],
      setSelectedEmployee: (payload) =>
        set(() => ({ selectedEmployee: payload })),
      employees: null,
      setEmployees: (payload) => set(() => ({ employees: payload }))
    }),
    persistConfig
  )
);

export default useAppStore;
