import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const persistConfig = {
  name: 'store',
  version: 'v1'
};

const Store = create(
  persist(
    (set) => ({
      // Alert store
      alert: { show: false, severity: 'info', message: 'none' },
      setAlert: (payload) => set(() => ({ alert: payload })),
      // User store
      user: null,
      setUser: ({
        session: { accessToken, refreshToken, tokenType },
        data: { email, id, phone }
      }) =>
        set(() => ({
          user: {
            session: { accessToken, refreshToken, tokenType },
            data: { email, id, phone }
          }
        }))
    }),
    persistConfig
  )
);

export default Store;
