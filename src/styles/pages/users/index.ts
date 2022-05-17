import styled from 'styled-components';

export const Container = styled.div``;

export const HeaderUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 1rem 3rem;

  div {
    span {
      font-size: 1.5rem;
      font-weight: 700;

      color: var(--title);
    }

    p {
      color: var(--sub-title);
      margin-top: 0.5rem;
    }
  }

  button {
    width: 15%;
    height: 3rem;

    border: none;
    border-radius: 10px;

    font-size: 1rem;
    font-weight: 600;

    color: #fff;
    background: var(--indigo);

    &:hover {
      filter: brightness(1.3);
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;

  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  button {
    border: none;
    background: transparent;

    font-size: 1rem;
    font-weight: 600;

    color: var(--indigo);

    width: 50%;

    &:last-child {
      color: var(--red);
    }
  }
`;
