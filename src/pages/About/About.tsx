import { useContext } from "react";

import { AboutWrapper, Title } from "./styles";
import { JokeContext } from "../../components/Layout/Layout";

function About() {
  const { joke } = useContext(JokeContext)
  return (
    <AboutWrapper>
      <Title>{joke}</Title>
    </AboutWrapper>
  )
}

export default About;