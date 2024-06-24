import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../helpers/API";
import { useState } from "react";
import { LoginResponse } from "../../interfaces/auth.interface";
import { useNavigate } from "react-router-dom";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export function Login() {
  // Стейт для ошибки
  const [error, setError] = useState<string | null>();

  // Функция(хук), которая будет перенаправлять нас на страницу после успешного логина
  const navigate = useNavigate();

  // Функция, которая будет сабмитет нашу форму после ее заполнения
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  // Функция, которая делает постящий запрос с логином и паролем
  const sendLogin = async (email: string, password: string) => {
    // Делаем постящий запрос
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("jwt", data.access_token);
      navigate("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={styles.login}>
      <Headling>Вход</Headling>
      {error && <div className={styles.error}>{error}</div>}
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
