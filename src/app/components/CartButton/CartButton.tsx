'use client'

import React from 'react'

interface CartButtonProps {
  itemCount: number
  onClick: () => void
}

const CartButton: React.FC<CartButtonProps> = ({ itemCount, onClick }) => {
  return <>CartButton</>
}

export default CartButton
