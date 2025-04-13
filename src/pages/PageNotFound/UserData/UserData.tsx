import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  UserDataContainer,
  UserDataCard,
  UserDataName,
  UserDataInfo,
  Image,
} from "./styles";
import { LoginFormContext } from "../context/LoginFormContext"; // предполагаемое местоположение

function UserData() {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  const { data, changeData } = useContext(LoginFormContext);
  
  const deleteData = () => {
    changeData(undefined);
  };
  const USER_URL = "https://randomuser.me/api/";
  const getUser = async () => {
    setError(undefined);
    try {
      const response = await axios.get(USER_URL);
      setUserData(response.data.results[0]);
    } catch (error: any) {
      setError("Произошла ошибка при загрузке данных");
    } finally {
      console.log("Результат получен");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  if (!userData) return <div>Нет данных пользователя</div>;
  return (
    <UserDataContainer>
      <UserDataCard>
        <Image src={userData.picture.large} alt="User" />
        <UserDataName>
          {userData.name.first} {userData.name.last}
        </UserDataName>
        <UserDataInfo>Email: {userData.email}</UserDataInfo>
        <UserDataInfo>Location: {userData.location.country}</UserDataInfo>
        <button onClick={deleteData}>Logout</button>
      </UserDataCard>
    </UserDataContainer>
  );
}
export default UserData;