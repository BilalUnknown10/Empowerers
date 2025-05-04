import { create } from 'zustand';

const useUserStore = create((set) => ({
  username: '',
  isLogin: false,
  role: '',
  
  setUsername: (username) => set({ username }),
  setIsLogin: (isLogin) => set({ isLogin }),
  setRole: (role) => set({ role }),
  
  logout: () => set({ username: '', isLogin: false, role: '', token : '' }),
}));

export default useUserStore;