import { ChangeEvent, useEffect, useState } from "react";

import Button from "../../components/Button/Button"
import { Lesson11Container, Result } from "./styles"
import Input from "../../components/Input/Input";
import Product from "../../components/Product/Product";

function Lesson11() {
  //state для хранения значение count
  const [count, setCount] = useState<number>(0);
  //state для отслеживания первого рендера
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  //state для контроля поля
  const [exampleValue, setExampleValue] = useState<string>('');
  //state для переключения видимости карточки продукта
  const [showCard, setShowCard] = useState<boolean>(true);

  const showHideCard = () => {
    setShowCard((prevValue) => !prevValue)
  }

  const changeExampleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setExampleValue(event.target.value)
  }
  // let count = 0;
  console.log('Render');

  //Mounting - пример использования useEffect, для выполнение действия при 
  // первом рендере компонента
  // useEffect(()=>{
  //   console.log('Mounting(first render)');
  // },[])

  useEffect(() => { setIsFirstRender(false) }, [])
  //Update - пример использования useEffect, для выполнение действия при 
  // изменении компонента компонента
  useEffect(() => {
    if (!isFirstRender) {
      console.log('(change state count)');
    }
  }, [count])

  useEffect(() => {
    console.log('input value changed');
  }, [exampleValue])

  //Example ДЗ
  // useEffect(() => {
  // изменять 3-й state, который хранит значение количества изменений
  // setState...
  // }, [exampleValue])

  return (
    <Lesson11Container>
      <Result>{count}</Result>
      <Button name='Change' onClick={() => { setCount(10) }} />
      <Input name='example' value={exampleValue} onChange={changeExampleValue} />
      <Button name='show/hide card' onClick={showHideCard} />
      {showCard && <Product productName="Apple" productPrice={2} />}
    </Lesson11Container>
  )
}

export default Lesson11