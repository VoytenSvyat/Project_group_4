import styled from "@emotion/styled";

export const UserHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-color: rgb(239, 232, 239);
`;

export const Title = styled.div`
 font-size: 40px;
 font-weight: bold;
 color: #07082e
`

export const UserCard = styled.div`
border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`

export const UserCardItem = styled.div`
display: flex;
 flex-direction: column;
 align-items: center;
 margin: 5px;
 justify-content: center;
 min-width: 250px;
 height: 80px;
 overflow: auto;
 padding: 20px;
 background-color: white;
 border-radius: 10px;
`

export const Image = styled.img`
width: '100px';
height: '100px'; 
border-radius: 50%;
margin-bottom: '10px'; 
`