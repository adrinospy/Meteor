import { create } from "zustand";

type AuthStore = {
  Login: boolean;
  loginUser: () => void;
  logoutUser: () => void;
};

const useLogin = create<AuthStore>((set) => ({
  Login: false,
  loginUser: () => set({ Login: true }),
  logoutUser: () => set({ Login: false }),
}));

export default useLogin;
