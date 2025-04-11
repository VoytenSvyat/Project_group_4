import { ChangeEvent, useState } from 'react';

import './styles.css'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
// все картинки в проекте уже экспортированы по умолчанию, чтобы добавить картинку
// в компонент нужно её просто импортировать(по умолчанию) и придумать псевдоним
import AvatarImg from '../../assets/avatar.jpg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Lesson08() {
  //Неконтролируемый элемент(компонент) - элемент, который контролируется браузером
  //Контролируемый элемент(компонент) - элемент, который контролируется c помощью React

  // 1 шаг контроля - создание state, в котором будет храниться значение поля
  const [message, setMessage] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false)

  // 2 шаг контроля - создание функции, которая будет изменять значение в state, при
  // изменении значения в поле
  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setMessage(event.target.value)
  }

  const showMesageHandler = () => {
    setShowMessage(!showMessage)
  }

  return (
    <div className="lesson08-container">
      <Input name='example' />
      <Input
        name='message'
        label='Message'
        id='message_id'
        placeholder='Enter your message'
        value={message}
        onChange={onChangeMessage}
      />
      <Button name='Show message' onClick={showMesageHandler} />
      {/* {showMessage ? <div>{message}</div> : null} */}
      {showMessage && <div>{message}</div>}
      {/* Если в компоненте используется prop children, то в таком случае
      компонент вызывается с использованием открывающего и закрывающего элемента,
      а между ними добавляются те JSX элементы, которые мы хотим подставить вместо children */}
      <EmployeeCard
        name='Mary Smith'
        position='Software Engineer'
        department='IT'
        img={AvatarImg}
      >
        <h3>The best employee</h3>
        <Button name='Show personal page' />
      </EmployeeCard>
    </div>
  )
}

export default Lesson08;