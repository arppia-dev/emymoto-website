import React from 'react'

interface ProductCardProps {
  title: string
  price: number
  imageUrl: string
  onAddToCart: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card__image" />
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price.toFixed(2)}</p>
        <button className="product-card__button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
