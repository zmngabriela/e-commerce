import { useLocation } from "react-router-dom";

export const formatToEuro = (value: number): string => {
  return new Intl.NumberFormat('se-SE', { style: 'currency', currency: 'EUR' }).format(value);
}

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => {
    acc += item.product.price
    return acc
  }, 0)
}

export const getUniqueItems = (items: CartItem[]) => {
  return items.reduce<CartItem[]>((unique, currentItem) => {
    const itemFound = unique.find(item => (
      item.product.id === currentItem.product.id &&
      item.selectedSize === currentItem.selectedSize
    ))
    if (!itemFound) {
      unique.push(currentItem)
    }
    return unique
  }, [] as CartItem[])
}

export const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}
