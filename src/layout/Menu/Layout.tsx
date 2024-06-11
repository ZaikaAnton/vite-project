import styles from "./Layout.module.css";
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button/Button";

export function Layout() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <div className={styles.user}>
            <img
              src="/alteravatar.svg"
              alt="Avatar"
              className={styles.avatar}
            />
            <div className={styles.name}>Anton Zaika</div>
            <div className={styles.mail}>hzhz@gmail.com</div>
          </div>

          <div className={styles.menu}>
            <Link to="/" className={styles.link}>
              <img src="/menu-icon.svg" alt="Menu icon" />
              Меню
            </Link>
            <Link to="/cart" className={styles.link}>
              <img src="/cart-icon.svg" alt="Cart icon" />
              Корзина
            </Link>
          </div>
          <Button className={styles.exit}>
            <img src="/exit-icon.svg" alt="Exit icon" /> Выход
          </Button>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
