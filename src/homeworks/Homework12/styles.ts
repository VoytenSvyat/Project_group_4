import styled from "@emotion/styled";

import backImage from '../../assets/background-image.jpg';

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(213, 180, 240);
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
`;

export const FactWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-width: 1000px;
 min-height: 400px;
 padding: 30px;
 background-color: white;
 border-radius: 10px;
 font-size: 24px;
 color:rgb(48, 9, 36);
 font-weight: bold;
`

export const Error = styled.div`
 font-size: 28px;
 color: red;
 font-weight: bold;
`
