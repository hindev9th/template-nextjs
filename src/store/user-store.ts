import { create } from 'zustand';

type User = {
  id: number;
  name: string;
  email: string;
};

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
};

const addUser = (state: UserStore, user: User) => {
  return { users: [...state.users, user] };
};

const removeUser = (state: UserStore ,id: number) => {
  return { users: state.users.filter((u) => u.id !== id) };
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => addUser(state, user)),
  removeUser: (id) => set((state) => removeUser(state, id)),
}));
