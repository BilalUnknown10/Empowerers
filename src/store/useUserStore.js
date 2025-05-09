import { create } from 'zustand';

const useUserStore = create((set) => ({
  username: '',
  isLogin: false,
  role: '',
  topMenu : "",
  setUsername: (username) => set({ username }),
  setIsLogin: (isLogin) => set({ isLogin }),
  setRole: (role) => set({ role }),
  setTopMenu : (topMenu) => set({topMenu}),
  
  logout: () => set({ username: '', isLogin: false, role: '', token : '' }),
}));

export default useUserStore;