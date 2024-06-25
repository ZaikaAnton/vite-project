import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

// Компонент, который проверяет есть ли jwt токен, если его нет,
// то при помощи Navigate перенаправляет на страницу логина
// Если есть, то он просто возвращает children
export const RequiedAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((state: RootState) => state.user.jwt);
  // const jwt = localStorage.getItem("jwt");

  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};
