import React, { useEffect } from 'react';
import {
  Container,
  HeaderUserContainer,
  Table,
} from '../../styles/pages/users';

import { useUser } from '../../context/userContext';

import { useRouter } from 'next/router';

export default function Users() {
  const { userList, setUser, getAllUsers, deleteUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <HeaderUserContainer>
          <div>
            <span>Usuários</span>
            <p>Lista com todos os usuários do projeto</p>
          </div>

          <button onClick={() => router.push('/users/create')}>
            Novo usuário
          </button>
        </HeaderUserContainer>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Pis</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>{user.email}</td>
                <td>{user.pis}</td>
                <td width={200}>
                  <button
                    onClick={() => {
                      setUser(user);
                      router.push(`/users/edit/${user.id}`);
                    }}
                  >
                    Editar
                  </button>
                  <button onClick={() => deleteUser(String(user.id))}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
