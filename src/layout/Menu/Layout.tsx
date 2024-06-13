import styles from "./Layout.module.css";
import cn from "classnames";
import { NavLink, Outlet } from "react-router-dom";
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(styles.link, {
                  [styles.active]: isActive,
                })
              }
            >
              <img src="/menu-icon.svg" alt="Menu icon" />
              Меню
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                cn(styles.link, {
                  [styles.active]: isActive,
                })
              }
            >
              <img src="/cart-icon.svg" alt="Cart icon" />
              Корзина
            </NavLink>
          </div>
          <Button className={styles.exit}>
            <img src="/exit-icon.svg" alt="Exit icon" /> Выход
          </Button>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
