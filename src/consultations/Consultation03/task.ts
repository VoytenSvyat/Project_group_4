/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

let age: number = 25;

let name: string = "Alice";

let isActive: boolean = true;

let nullableValue: string | null = null; // Строка или null

let numbers: number[] = [1, 2, 3, 4];

let names: string[] = ["Alice", "Bob", "Charlie"];

let mixed: (string | number)[] = [1, "Alice", 2, "Bob"];

let colors: (string | number | boolean)[] = [123, "red", true, "blue"];

const add = (a: number, b: number): number => {
  return a - b;
};

// type Role = "admin" | "user" | "guest";

enum ROLE {
    ADMIN='admin',
    USER= 'user',
    GUEST= 'guest'
};

interface User {
  id: string | number;
  name: string;
  email: string;
  isActive: boolean;
  role: ROLE 
};

const objectUser: User = {
  id: 1234,
  name: "Bob",
  email: "wer@mail.de",
  isActive: true,
  role: ROLE.ADMIN,
};

// Задача 3
interface Products {
    id: number,
    name: string,
    price: number,
    inStock: boolean;
};


const products: Products[] = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Keyboard", price: 80, inStock: true },
  ];

interface Book {
    id: string,
    title: string,
    price: number,
    inStock: boolean,
};

interface Customer {
    id: number,
    name: string,
    email: string,
};
interface Order {
    orderId: string,
    customerId: number,
    books:  string[],
    totalAmount: number,
    status: ORDER_STATUS,
}

enum ORDER_STATUS {
    PROC='processing',
    SHIP= 'shipped',
    DEL= 'delivered'
}

interface Setting {
    currency: string,
    isOpen: boolean,
    discountRate: number, 
}

  interface Bookstore {
    name: string,
    location: string,
    books: Book[],
    customers: Customer[] ,
    orders: Order[],
    settings: Setting
  }
    

  const bookstore: Bookstore = {
    name: "The Grand Bookstore",
    location: "New York, USA",
    books: [
      {
        id: "B001",
        title: "The Hobbit",
        price: 15.99,
        inStock: true,
      },
      {
        id: "B002",
        title: "1984",
        price: 12.5,
        inStock: false,
      },
    ],
    customers: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
    ],
    orders: [
      {
        orderId: "O1001",
        customerId: 101,
        books:  [ "B001", "B001" ],
        totalAmount: 15.99,
        status: ORDER_STATUS.SHIP,
      },
    ],
    settings: {
      currency: "USD",
      isOpen: true,
      discountRate: 10, 
    }
  }