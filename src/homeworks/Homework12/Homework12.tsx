import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

import Button from "../../components/Button/Button"
import { Homework12Container, FactWrapper, Error } from "./styles"
import Spinner from "../../components/Spinner/Spinner";


function Homework12() {
  const [fact, setFact] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFact = async () => {
    setErrorMessage(undefined);
    setIsLoading(true)

    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error: any) {
      setErrorMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { getFact() }, []);

  return (
    <Homework12Container>
      <Button name='GET MORE FACTS' onClick={getFact} disabled={isLoading} />
      <FactWrapper>{isLoading ? <Spinner /> : fact}</FactWrapper>
      <Error>{errorMessage}</Error>
    </Homework12Container>
  )
}

export default Homework12