import styled from "@emotion/styled";

export const UserDataContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 40px;
 flex: 1;
 padding: 60px;
 background-color: rebeccapurple 
`;

export const UserDataCard = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 padding: 40px;
 border: 1px solid black;
 border-radius: 4px;
 width: 700px;
 min-height: 300px;
 max-height: fit-content;
 background-color: wheat;
 color: black;
`;

export const UserDataName = styled.div`
 font-size: 24px;
 font-weight: bold;
`;

export const Image = styled.img`
 width: 400px;
`

export const UserDataInfo = styled.div`
font-size: 20px;
font-weight: bold;
`;