import { useState, createContext } from "react"

import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { MainCardInterface, UserData } from "./types"

// Шаг 1. Создаём хранилище - контекст, с помощью функции createContext,
// которую нужно импортировать из react
// export const MainCardContext = createContext<undefined | UserData>(undefined)

//Пример передачи функции и данных через контекст
export const MainCardContext = createContext<MainCardInterface>({
  data: undefined,
  changeData: () => { }
})


function MainCard() {
  const [userData, setUserData] = useState<UserData|undefined>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    //2 шаг. Создаём обёртку, которая позволит получить значение из контекста
    //в любом компоненте, который будет вложен в компонент с оберткой (внук, правнук и т.д.)
    //Провайдер мы получаем из созданного контекста. Провайдер требует передачи данных
    //в контекст через prop value
    // <MainCardContext.Provider value={userData}>

    //Пример передачи функции и данных через контекст
    <MainCardContext.Provider value={{
      data: userData,
      changeData: setUserData
    }}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Пример с props drilling */}
        {/* <Section data={userData} /> */}
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  )
}

export default MainCard