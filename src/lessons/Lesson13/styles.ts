import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: #C59BFC;
`;

export const ImagesWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-width: 500px;
 /* для добавления scroll используем набор свойств
 постоянна высота (height) и свойство  overflow: auto; */
 height: 700px;
 overflow: auto;
 padding: 30px;
 background-color: white;
 border-radius: 10px;
`
export const ButtonContainer = styled.div`
 display: flex;
 gap: 20px;
 width: 500px;
`

export const Image = styled.img`
width: 400px;
`

export const Error = styled.div`
 font-size: 28px;
 color: red;
 font-weight: bold;
`
