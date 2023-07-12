import { create } from "zustand";

interface SignInStore {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useStore = create<SignInStore>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set((state) => ({ ...state, email: email })),
  setPassword: (password) => set((state) => ({ ...state, password }))
                                    //! 변수명이랑 속성명이 같으면 생략 가능
}));

// state -> {email, password, setEmail}
// { ...state } -> { email, password, setEmail }
// { ...state, email: 'email' } -> { email: 'email', password, setEmail }

export default useStore;