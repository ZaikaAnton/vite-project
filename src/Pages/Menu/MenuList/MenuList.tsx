import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";

export function MenuList({ products }: MenuListProps) {
  return products.map((p) => (
    <ProductCard
      key={p.id}
      id={p.id}
      name={p.name}
      description={p.ingredients.join(", ")}
      rating={p.rating}
      price={p.price}
      image={p.image}
    />
  ));
}

// Пропс product приходят из компонента Menu - это данные, которые приходят из запроса на бек. А он описан в компоненте Menu
