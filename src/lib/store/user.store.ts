import { updateNotification } from "@mantine/notifications";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User as IUser } from "@/lib/interface/user";

interface UserState {
  user: null | IUser;
  isIdle: boolean;
  setIsIdle: (state: boolean) => void;
  setUser: (user: IUser | null) => void;
  removeUser: () => void;
  notifications: any[];
  setNotification: (state: any[]) => void;
  updateNotification: (value: any) => void;
}

const User = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isIdle: false,
      setIsIdle: (state) => set(() => ({ isIdle: state })),
      setUser: (user) => set(() => ({ user })),
      removeUser: () => set(() => ({ user: null })),
      notifications: [],
      setNotification: (data) => set(() => ({ notifications: data })),
      updateNotification: (newNotification) =>
        set((state) => ({
          notifications: [newNotification, ...state.notifications],
        })),
    }),
    {
      name: "nilds-tasks-user-store",
    }
  )
);

export default User;
