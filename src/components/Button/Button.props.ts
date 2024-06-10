import { ButtonHTMLAttributes, ReactNode } from "react";

// При помощи этого интерфейса мы протипизировали props, которые принимает компонент Button
// extends ButtonHTMLAttributes<HTMLButtonElement> - вот это нужно чтоб мы в компоненте App.tsx смогли навесить обработчик на Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
