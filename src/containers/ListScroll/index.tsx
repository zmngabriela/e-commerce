import { useRef, useState } from "react";

import ProductCard from "../../components/ProductCard";
import CategoryCard from "../../components/CategoryCard";

import * as S from './styles'

type Props = {
  products?: Product[]
  categories?: Category[]
}

const ListScroll = ({ products, categories }: Props) => {
    const scrollContainer = useRef<HTMLUListElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
      const container = scrollContainer.current;
      if (!container) return;

      setIsDown(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      container.style.cursor = 'grabbing';
  };

    const handleMouseLeave = () => {
      setIsDown(false);
      if (scrollContainer.current) {
        scrollContainer.current.style.cursor = 'grab';
      }
    };

    const handleMouseUp = () => {
      setIsDown(false);
      if (scrollContainer.current) {
        scrollContainer.current.style.cursor = 'grab';
      }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      const container = scrollContainer.current;
      if (!isDown || !container) return;

      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

  return (
    <S.Items
      ref={scrollContainer}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {products && products?.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
      {categories && categories?.map((category) => (
        <CategoryCard key={category.id} item={category} />
      ))}
    </S.Items>
  )
}


export default ListScroll
