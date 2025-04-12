import { useContext } from "react";

import { UserData } from "./types"
import { UserDataComponent, UserDataCard, UserDataName, UserDataInfo, Image } from "./styles"



function UserData (){

    const USER_URL: string = "https://randomuser.me/api/";

    const { data, changeData } = useContext(LoginFormContext) 

    const deleteData = () => {
        changeData(undefined)
    }
    
return (

    <UserDataComponent>
     <UserDataCard>
        <UserDataName>First Name:{userData?.firstName}</UserDataName>
        <UserDataName>Last Name:{userData?.lastName}</UserDataName>
        <UserDataInfo>City:{userData?.city}</UserDataInfo>
        </UserDataCard>
    </UserDataComponent>
    
    )
}

export default UserData