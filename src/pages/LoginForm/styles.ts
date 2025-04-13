import styled from '@emotion/styled';
import bgImage from '../../assets/touch2.png'; 

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ImageSide = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SceneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

export const FormSide = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.div`
  background: rgba(255, 255, 255, 0.753);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:disabled {
    background-color: #cccccc;
  }
`;

export const Error = styled.div`
  margin-top: 10px;
  color: red;
`;

export const RightSpace = styled.div`
  width: 33.33%;
`;
