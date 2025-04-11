  //--- Тип any - можно использовать любой тип
  let city: any = 'Berlin';
  city = ['Paris', 12334];

  //--- Типизация объекта через интерфейс
  interface User {
    name: string,
    age?: number | string
  }

  const userData: User = {
    name: 'Tom',
    age: 34
  }

  interface User {
    isAdmin?: boolean
  }

  //Наследование интерфейсов
  interface Admin extends User {
    email: string,
    tel: string
  }

  const personData: Admin = {
    name: 'Bob',
    email: 'asd@gmail.com',
    tel: '904578'
  }

  const newUser: User = {
    name: 'John',
    // email: ''
  }

  //--- Типизация через type
  //использование type для создания усложненного типа
  type Weight = string | number | null;

  let userWeight: Weight = '52';
  let animalWeight: Weight = null;

  //пример использования union для ограничения переменной по значениям
  type Status = 'success' | 'error' | 'loading';
  let requestStatus: Status = 'success';
  requestStatus = 'loading';
  //пример неправильного указания значения
  // requestStatus = 'eror';

  //использование type для типизации объекта
  type Animal = {
    name: string,
    weight?: number
  };

  const animalData: Animal = {
    name: 'Lion',
    weight: 200
  }

  // !нельзя создавать типы с одинаковыми названиями
  // type Animal = {country: string};

  //объединение типов
  type NewAnimal = Animal & { country: string };

  const zebra: NewAnimal = {
    name: 'Zebra',
    country: 'Afrika'
  }

  const dog: Animal = {
    name: 'Dog',
    // country: 'Germany'
  }

  //Generic&Type - дженерик это переменная, в которую мы можем подставит
  // нужный тип, в момент использования данного type (interface)
  type CustomArrayType<T = null> = (string | T)[];

  const arrayMix1: CustomArrayType<number> = ['red', 123, 'black'];
  const arrayMix2: CustomArrayType<number[]> = ['apple', [1, 4, 1]];
  const arrayMix3: CustomArrayType = ['zebra', null];

  //Generic&Interface 
  interface Fruit<T = number> {
    title: string,
    address: T
  }

  const fruitObj: Fruit<string> = {
    title: 'Grape',
    address: 'London, str...'
  }

  //---Числовое перечисление
  enum Colors { Red, Black = 6, Green };

  //---Строковое перечисление
  // enum для цветов светофора
  export enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green'
  }

  // Пример экспорта именованного экспорта
  export const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return 'Стоп!';
      case TRAFFIC_LIGHT.YELLOW:
        return 'Приготовьтесь идти';
      case TRAFFIC_LIGHT.GREEN:
        return 'Можно идти';
    }
  }

  console.log(getAction(TRAFFIC_LIGHT.YELLOW))