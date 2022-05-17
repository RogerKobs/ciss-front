import React, { useState } from 'react';
import { Container } from '../../../styles/pages/users/create';

import { useUser } from '../../../context/userContext';

import { useRouter } from 'next/router';

import { User } from '../../../@types/user';
import { ErrorUser } from '../../../@types/errorUser';

import UserInformation from '../../../components/pages/users/userInformation';

export default function Create() {
  const [userData, setUserData] = useState<User>({} as User);
  const [errorUserData, setErrorUserData] = useState<User>({} as User);

  const { createUser } = useUser();
  const router = useRouter();

  const handleChange =
    (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({ ...userData, [prop]: event.target.value });
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response: any = await createUser(userData);

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
    <>
      <Container>
        <h1>Criar usuário</h1>

        <UserInformation
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          userData={userData}
          setUserData={setUserData}
          errorUserData={errorUserData}
        />
      </Container>
    </>
  );
}
