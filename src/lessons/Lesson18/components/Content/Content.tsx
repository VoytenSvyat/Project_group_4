import { useContext } from 'react'

import { MainCardContext } from '../MainCard/MainCard'
import { ContentComponent, DataItem } from "./styles"
import Button from '../../../../components/Button/Button';
// import { ContentProps } from "./types"

function Content() {
  // 3 шаг - Вызываем хук useContext (после импорта из react). В вызов useContext передаём
  // контекст, который был создан на шаге 1 (нужно импортировать). При вызове хук useContext 
  // возвращает данные, которые храняться в контексте

  // const userContentData = useContext(MainCardContext)

  //Пример передачи функции и данных через контекст
  // const userContentData = useContext(MainCardContext)
  // Деструктурирующее присваивание
  const { data, changeData } = useContext(MainCardContext)

  const deleteData = () => {
    changeData(undefined)
  }

  return (
    <ContentComponent>
      {/* Если переменная может содержать объект или undefined, тогда
      перед обращением к свойству объекта, желательно ставить знак вопроса,
      чтобы избежать случая получения undefined(пустого свойства). То есть
      знак вопроса проверяет является ли переменная слева объектом */}
      <DataItem>First Name: {data?.firstName}</DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button name='Delete all data' onClick={deleteData} />
    </ContentComponent>
  )
}

export default Content

// function Content({ userData }: ContentProps) {

//   return (
//     <ContentComponent>
//       <DataItem>First Name: {userData.firstName}</DataItem>
//       <DataItem>Last Name: {userData.lastName}</DataItem>
//       <DataItem>Age: {userData.age}</DataItem>
//     </ContentComponent>
//   )
// }

// export default Content
