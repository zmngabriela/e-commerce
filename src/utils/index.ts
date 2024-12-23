import { useLocation } from "react-router-dom";

export function formatToEuro(value: number): string {
  return new Intl.NumberFormat('se-SE', { style: 'currency', currency: 'EUR' }).format(value);
}

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => {
    acc += item.product.price
    return acc
  }, 0)
}

export const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}
