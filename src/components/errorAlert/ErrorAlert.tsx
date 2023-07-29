import { FC } from "react";
import "./ErrorAlert.css";

export type AlertProps = {
  children: React.ReactNode;
};

export const ErrorAlert: FC<AlertProps> = ({ children }) => {
  return <div className="error-alert-wrapper">{children}</div>;
};
