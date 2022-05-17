import React from 'react';
import {
  Container,
  UserInformationGrid,
  InputContainer,
  ButtonActionContainer,
} from './styled';

import InputMask from 'react-input-mask';

import { useRouter } from 'next/router';
import { User } from '../../../../@types/user';

import { removeSpecialCharacters } from '../../../../utils/stringUtils';

interface UserInformationProps {
  handleSubmit: (event: React.FormEvent) => Promise<void>;
  handleChange: (
    prop: keyof User,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  userData: User;
  setUserData: (user: User) => void;
  errorUserData: User;
}

export default function UserInformation({
  handleSubmit,
  handleChange,
  userData,
  setUserData,
  errorUserData,
}: UserInformationProps) {
  const router = useRouter();

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <UserInformationGrid>
          <InputContainer className='first_name'>
            <label htmlFor=''>Primeiro nome:</label>
            <input
              type='text'
              value={userData.first_name}
              onChange={handleChange('first_name')}
            />

            {errorUserData.first_name && (
              <span>{errorUserData.first_name}</span>
            )}
          </InputContainer>

          <InputContainer className='last_name'>
            <label htmlFor=''>Segundo nome:</label>
            <input
              type='text'
              value={userData.last_name}
              onChange={handleChange('last_name')}
            />

            {errorUserData.last_name && <span>{errorUserData.last_name}</span>}
          </InputContainer>

          <InputContainer className='email'>
            <label htmlFor=''>E-mail:</label>
            <input
              type='text'
              value={userData.email}
              onChange={handleChange('email')}
            />

            {errorUserData.email && <span>{errorUserData.email}</span>}
          </InputContainer>

          <InputContainer className='pis'>
            <label htmlFor=''>Pis:</label>
            <InputMask
              type='text'
              value={userData.pis}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  pis: removeSpecialCharacters(event.target.value),
                })
              }
              mask='999.99999.99-99'
            />

            {errorUserData.pis && <span>{errorUserData.pis}</span>}
          </InputContainer>
        </UserInformationGrid>

        <ButtonActionContainer>
          <button type='button' onClick={() => router.push('/users')}>
            Cancelar
          </button>
          <button type='submit'>Salvar</button>
        </ButtonActionContainer>
      </Container>
    </>
  );
}
