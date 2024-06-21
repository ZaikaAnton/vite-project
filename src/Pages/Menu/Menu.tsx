import styles from "./Menu.module.css";
import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
  // Стейт, который хранит данные, полученные с бека
  const [products, setProducts] = useState<Product[]>([]);

  // Стейт, который хранит булево состояние о прелоадере, к запросу на бек
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Состояние для обработки ошибки, к запросу на бек
  const [error, setError] = useState<string | undefined>();

  // Запрос на бек, для получения всех карточек с блюдами
  const getMenu = async () => {
    try {
      // Запуска прелоадера
      setIsLoading(true);

      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      // Возвращаем isLoading в false, чтоб прекратить отображение прелоадера
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      // Проверка принадлежности ошибки (объект e) к классу AxiosError
      if (e instanceof AxiosError) {
        // e.massage - это текс ошибки. Тут мы этот тек устанавливаем в наш стейт и теперь он должен хранить этот текст
        setError(e.message);
      }
      // Возвращаем isLoading в false, чтоб прекратить отображение прелоадера
      setIsLoading(false);
      return;
    }
  };

  // Вызов функции getMenu()
  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <>Происходит запрос на бекенд</>}
      </div>
    </>
  );
}

export default Menu;
