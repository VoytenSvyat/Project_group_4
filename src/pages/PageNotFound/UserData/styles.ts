import styled from '@emotion/styled';

export const UserDataContainer = styled.div`
  min-height: 100vh;
  background-color: #f3eee3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserDataCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;
export const UserDataName = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;
export const UserDataInfo = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;
export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;
export const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e76f51;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #d65a3b;
  }
`;
export const ErrorText = styled.div`
  color: red;
  margin-top: 15px;
`;
