import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button"
import { Lesson13Container, Error, ImagesWrapper, ButtonContainer, Image } from "./styles"
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13() {
  // 1. Создание всех состояний
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')

  //2. Сохранение переменных
  const ANIMAL_URL: string = 'https://dog.ceo/api/breeds/image/random';
  //Создаём переменную, котора будет показывать, есть ли хотя бы одна картинка
  // в state
  const isHasDogsImages: boolean = dogImages.length !== 0;

  //3. Создание дополнительных функций (наиболее важные создаются в первую очередь)
  const getDogImg = async () => {
    setErrorMessage(undefined)
    setIsLoading(true)
    try {
      const response = await axios.get(ANIMAL_URL);
      setDogImages((prevValue) => [...prevValue, response.data.message])
    } catch (error: unknown) {
      //При типизации ошибки, необходимо указывать специальный тип для неё unknown- 
      //который в дальнейшем требует проверки типа параметра error, что мы и делаем.
      //В первую очередь проверяем является ли эта ошибка ошибкой axios (axios.isAxiosError(error)),
      // а во всех остальных случаях сохраняем заготовленный текст ошибки
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unknown error')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const changeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    getDogImg();
  }

  const deleteAllImages = () => {
    setDogImages([])
  }

  // 4. (Необязательно) Cоздание массива(ов) элементов
  const dogPhotos = dogImages.map((image: string) => {
    return <Image key={v4()} src={image} />
  })

  //5. Все useEffect
  useEffect(() => { getDogImg() }, []);

  return (
    <Lesson13Container>
      <ButtonContainer>
        <Button name='GET MORE IMAGES' onClick={getDogImg} disabled={isLoading} />
        {isHasDogsImages && <Button name='DELETE ALL DATA' onClick={deleteAllImages} danger />}
      </ButtonContainer>
      <Input name='search' value={search} onChange={changeSearch} search />
      {isHasDogsImages && <ImagesWrapper>
        {dogPhotos}
        {isLoading && <Spinner />}
      </ImagesWrapper>}
      <Error>{errorMessage}</Error>
    </Lesson13Container>
  )
}

export default Lesson13