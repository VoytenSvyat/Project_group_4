import styled from "@emotion/styled";

export const Consultation06Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(19, 4, 104);
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 4px;
  width: 700px;
  min-height: 300px;
  max-height: fit-content;
  background-color: white;
  color: black;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const UserInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
