import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../@types/user';

import { api } from '../service/api';

interface UserContextProps {
  userList: User[];
  user: User;
  setUser: (user: User) => void;
  getAllUsers: () => void;
  findUserById: (userId: string) => void;
  createUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (userId: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextProps);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User>({} as User);

  const getAllUsers = async () => {
    const { data } = await api.get('/user');

    setUserList(data);
  };

  const findUserById = async (userId: string) => {
    try {
      const { data } = await api.get(`/user/${userId}`);

      setUser(data);
    } catch (err: any) {
      return err.response;
    }
  };

  const createUser = async (user: User) => {
    try {
      const { data } = await api.post('/user', JSON.stringify(user));

      return data;
    } catch (err: any) {
      return err.response;
    }
  };

  const updateUser = async (user: User) => {
    try {
      const { data } = await api.put(
        `/user/${user.id}/edit`,
        JSON.stringify(user),
      );

      return data;
    } catch (err: any) {
      return err.response;
    }
  };

  const deleteUser = async (userId: string) => {
    await api.delete(`/user/${userId}`);

    const index = userList.findIndex((element) => element.id === userId);

    const copyUserList = [...userList];
    copyUserList.splice(index, 1);

    setUserList(copyUserList);
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        user,
        setUser,
        getAllUsers,
        findUserById,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
