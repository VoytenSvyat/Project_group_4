import { useContext, useState } from "react";
import axios from "axios"

import { UserDataContainer, UserDataCard, UserDataName, UserDataInfo, Image } from "./styles"

function UserData () {
    const [user, setUser] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [setUserData] = useState<any>(undefined);

//Деструктурирующее присваивание
    const { data, changeData } = useContext(LoginFormContext);

    const deleteData = () => {
        changeData(undefined)
    }

    //if (!user) return <div>Нет данных пользователя</div>

    const USER_URL: string = "https://randomuser.me/api/";

    const getUser = async () => { 
        setError(undefined) 

        try {
            const response = await axios.get(USER_URL);
            setUserData(response.data.result[0]);
    
           }
            catch (error: any) { 
        }
        finally { 
            console.log('Результат получен'); 
            
        }
    }
   
return (
    <UserDataContainer>
     <UserDataCard>
        <UserDataName>First Name:{data?.firstName}</UserDataName>
        <UserDataName>Last Name:{data?.lastName}</UserDataName>
        <Image src="avatar.jpg"/>
        <UserDataInfo>City:{data?.city}</UserDataInfo>
        </UserDataCard>
    </UserDataContainer>
    )
}

export default UserData