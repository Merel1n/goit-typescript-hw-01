// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

// const mango = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// const poly = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com'
// };
interface Address {
  city: string;
  country: string;
}

type User = {
    name: string; 
    age: number;
    email: string;
    address?: Address;
}