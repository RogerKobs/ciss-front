import styled from 'styled-components';

export const Container = styled.form`
  margin: 3rem 0;
`;

export const UserInformationGrid = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(6, 1fr);

  .first_name {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .last_name {
    grid-column-start: 4;
    grid-column-end: 7;
  }

  .email {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .pis {
    grid-column-start: 5;
    grid-column-end: 7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    font-size: 1.1rem;
    font-weight: 600;

    color: var(--title);
  }

  input {
    height: 3rem;

    border: 1px solid var(--light-gray);
    border-radius: 10px;

    margin: 0.5rem 0;
    padding-left: 1rem;

    font-size: 1rem;
  }

  span {
    font-size: 1rem;
    font-weight: 400;

    color: var(--red);
  }
`;

export const ButtonActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 2rem;
  padding-top: 2rem;

  border-top: 1px solid var(--light-gray);

  button {
    color: var(--indigo);
    background: transparent;

    border: 1px solid var(--indigo);
    border-radius: 10px;

    padding: 1rem 2rem;

    font-size: 1rem;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      background: var(--indigo);
      color: #fff;
    }

    &:first-child {
      color: var(--red);
      background: transparent;
      border: 1px solid var(--red);

      margin-right: 1rem;

      &:hover {
        background: var(--red);
        color: #fff;
      }
    }
  }
`;
