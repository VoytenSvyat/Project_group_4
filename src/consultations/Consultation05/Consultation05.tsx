import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { BtnContainer, Consultation05Container, Result } from "./styles";

function Consultation05() {
  const [count, setCount] = useState<number>(0);
  const [showCountClick, setShowCountClick] = useState<number>(-1);

  const plusCount = () => {
    if (count < 15) {
      setCount((prevValue) => prevValue + 1);
    }
  };

  const minusCount = () => {
    if (count > -15) {
    setCount((prevValue) => prevValue - 1);
    }
  };

  useEffect(() => {
    setShowCountClick((prevValue) => prevValue + 1)
  }, [count])

  return (
    <Consultation05Container>
      <Result isNearLimit={count > 10 || count < -10}>{count}</Result>
      <BtnContainer>
        <Button name="+" onClick={plusCount} disabled={count === 15} />
        <Button name="-" onClick={minusCount} disabled={count === -15} danger />
      </BtnContainer>
      <Result>Вы кликнули на кнопку {showCountClick === -1? '0' : showCountClick} раз</Result>
    </Consultation05Container>
  );
}

export default Consultation05;
