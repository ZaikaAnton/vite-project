import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export function Login() {
  // Функция, которая будет сабмитет нашу форму после ее заполнения
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    console.log(email.value);
    console.log(password.value);
  };

  return (
    <div className={styles.login}>
      <Headling>Вход</Headling>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <Button appearance="big">Вход</Button>
      </form>

      <div className={styles.links}>
        <div>Нет аккаунта?</div>
        <Link to="/auth">Зарегистрироваться</Link>
      </div>
    </div>
  );
}
