import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  UserDataContainer,
  UserDataCard,
  UserDataName,
  UserDataInfo,
  Image,
  LogoutButton,
  ErrorText,
  NavigateButton,
} from './styles';
import { useUserContext } from '../../context/UserContext';
const UserData: React.FC = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const [randomUser, setRandomUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const USER_API_URL = 'https://randomuser.me/api/';

  const fetchRandomUser = async () => {
    setError(null);
    try {
      const response = await axios.get(USER_API_URL);
      setRandomUser(response.data.results[0]);
    } catch (err) {
      setError('Произошла ошибка при загрузке данных');
    }
  };
  useEffect(() => {
    fetchRandomUser();
  }, []);
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const navigateToHistory = () => {
    navigate('/user-history');
  };

  if (!user) {
    return <UserDataContainer>Нет данных о текущем пользователе</UserDataContainer>;
  }
  return (
    <UserDataContainer>
      <UserDataCard>
        {randomUser && (
          <Image src={randomUser.picture.large} alt="Random User" />
        )}
        <UserDataName>{user.name}</UserDataName>
        <UserDataInfo>Email: {user.email}</UserDataInfo>
        {randomUser && (
          <>
            <UserDataInfo>
              Страна: {randomUser.location.country}
            </UserDataInfo>
            <UserDataInfo>
              Город: {randomUser.location.city}
            </UserDataInfo>
          </>
        )}
        {error && <ErrorText>{error}</ErrorText>}
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        <NavigateButton onClick={navigateToHistory}>User History</NavigateButton>
      </UserDataCard>
    </UserDataContainer>
  );
};
export default UserData;