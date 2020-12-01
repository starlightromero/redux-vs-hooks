import React, { useState } from 'react'

export const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: id => {}
})

export default props => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ])

  const toggleFavorite = productId => {
    setProducts(currentProducts => {
      const prodIndex = currentProducts.findIndex(
        p => p.id === productId
      )
      const newFavStatus = !currentProducts[prodIndex].isFavorite
      const updatedProducts = [...currentProducts.products]
      updatedProducts[prodIndex] = {
        ...currentProducts.products[prodIndex],
        isFavorite: newFavStatus
      }
      return updatedProducts
    })
  }

  return (
    <ProductsContext.Provider value={{ products, toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  )
}
