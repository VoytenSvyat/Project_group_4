import { useNavigate } from "react-router-dom"

import { GooglePage, Description, Title, ButtonContainer } from "./styles"
import Button from "../../../../components/Button/Button";

function Google() {
  const navigate = useNavigate();

  const goToFacebookPage = () => {
    navigate('/clients/facebook')
  }

  return (
    <GooglePage>
      <Title>Google company</Title>
      <Description>Google page description</Description>
      <ButtonContainer>
        <Button name='Go to Facebook' onClick={goToFacebookPage} />
      </ButtonContainer>
    </GooglePage>
  )
}

export default Google