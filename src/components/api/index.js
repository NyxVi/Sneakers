const data = [
  {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    company: 'Sneaker company',
    discount: 50,
    images: [
      'image-product-1.jpg',
      'image-product-2.jpg',
      'image-product-3.jpg',
      'image-product-4.jpg',
    ],
    thumbnail: [
      'image-product-1-thumbnail.jpg',
      'image-product-2-thumbnail.jpg',
      'image-product-3-thumbnail.jpg',
      'image-product-4-thumbnail.jpg',
    ],
  },
]

class Product {
  constructor() {
    this.bd = data
  }

  getItem(id) {
    const result = this.bd.find(item => item.id === id)
    return result
  }
}

export { Product }
