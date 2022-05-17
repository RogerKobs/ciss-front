import React, { useEffect, useState } from 'react';
import { Container } from '../../../styles/pages/users/create';

import { useUser } from '../../../context/userContext';
import { useRouter } from 'next/router';

import UserInformation from '../../../components/pages/users/userInformation';

import { User } from '../../../@types/user';
import { ErrorUser } from '../../../@types/errorUser';

export default function Edit() {
  const [userData, setUserData] = useState<User>({} as User);
  const [errorUserData, setErrorUserData] = useState<User>({} as User);

  const { user, findUserById, updateUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user?.id) setUserData(user);
    else {
      const url = window.location.pathname.split('/');
      findUserById(url[3]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleChange =
    (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({ ...userData, [prop]: event.target.value });
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response: any = await updateUser(userData);

    if (response?.data?.errors) {
      const newObjectError: any = {
        first_name: '',
        last_name: '',
        email: '',
        pis: '',
      };

      response.data.errors.map((error: ErrorUser) => {
        newObjectError[error.field] = error.message;
      });

      setErrorUserData(newObjectError);
      return;
    }

    setUserData({} as User);
    router.push('/users');
  };

  return (
    <div>
      <Container>
        <h1>Editar usuário</h1>

        <UserInformation
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          userData={userData}
          setUserData={setUserData}
          errorUserData={errorUserData}
        />
      </Container>
    </div>
  );
}
