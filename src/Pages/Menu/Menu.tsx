import styles from "./Menu.module.css";
import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";

export function Menu() {
  return (
    <>
      <div className={styles.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image="/product.png"
        />
      </div>
    </>
  );
}
