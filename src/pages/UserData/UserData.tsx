import React from 'react';
import { useUserContext } from '../../context/UserContext';
import * as S from './styles';

const UserData: React.FC = () => {
  const { user } = useUserContext();

  if (!user) return <div>Нет данных пользователя</div>;

  return (
    <S.Container>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </S.Container>
  );
};

export default UserData;

