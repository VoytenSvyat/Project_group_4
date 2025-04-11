import styled from "@emotion/styled";

interface ResultStyledProps {
    isNearLimit?: boolean 
}

export const Consultation05Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(188, 219, 219);
`;

export const Result = styled.div<ResultStyledProps>`
font-size: 30px;
font-weight: bold;
color: ${({isNearLimit}) => isNearLimit? 'rgb(249, 8, 8)' : 'rgb(40, 36, 36)'};
`;

export const BtnContainer = styled.div`
display: flex;
gap: 20px;
`;