import { useNavigate } from 'react-router-dom'

import Button from "../../../../components/Button/Button";
import { ManagerWrapper, JobTitle, Image, ButtonContainer } from "./styles";

function Manager() {
  //хук useNavigate возвращает функцию, при вызове которой можно 
  // выполнить переход на любую страницу приложения
  const navigate = useNavigate();
  
  const goToCoursePage = ()=>{
    navigate('/course')
  }

  const goToDesignerPage = ()=>{
    navigate('/users/designer')
  }

  return (
    <ManagerWrapper>
      <JobTitle>Manager</JobTitle>
      <Image src='https://img.freepik.com/free-vector/xaillustration-businessman-celebrating-success-by-raising-his-hands_10045-817.jpg?semt=ais_hybrid&w=740' />
      <ButtonContainer>
        <Button name='More aboute course' onClick={goToCoursePage} />
        <Button name='About designer' onClick={goToDesignerPage}/>
      </ButtonContainer>
    </ManagerWrapper>
  )
}

export default Manager;