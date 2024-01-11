export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'The iPhone XL is a flagship smartphone by Apple known for its sleek design, high-quality camera system, and seamless integration with the iOS ecosystem. It offers a powerful performance, a vibrant display, and features such as Face ID for secure authentication.',
      image: 'assets/iphone-xl.jpg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 699,
      description: 'The Samsung S23 is a premium Android smartphone from Samsung. It boasts a large, high-resolution display, a versatile camera setup, and robust performance. Samsungs One UI enhances the user experience, and it typically offers a wide range of features and capabilities.',
      image: 'assets/s23.jpg'
    },
    {
      id: 3,
      name: 'Huawei P30',
      price: 299,
      description: 'The Huawei P30 is a well-regarded Android smartphone from Huawei. Its acclaimed for its exceptional camera system developed in collaboration with Leica, offering superb photography capabilities. The phone also features a stylish design, impressive battery life, and solid performance.',
      image: 'assets/p30.jpg'
    }
  ];
  
  
