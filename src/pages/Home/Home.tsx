import { useContext } from "react";

import { JokeContext } from "../../components/Layout/Layout";
import { HomeWrapper, Title } from "./styles";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
const {error, isLoading, getJoke} = useContext(JokeContext)

const navigate = useNavigate();

const getJokeAndredirect = ()=>{
  getJoke()
  navigate('/about')
}

  return (
    <HomeWrapper>
      <Title>Welcome to React Project</Title>
      <Button name='GET JOKE' onClick={getJokeAndredirect}/>
    </HomeWrapper>
  )
}

export default Home;