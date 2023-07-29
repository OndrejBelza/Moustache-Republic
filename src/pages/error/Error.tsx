import { FC } from "react";

export type ErrorPageProps = {
  errorMessage: string;
};

export const ErrorPage: FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div style={{ color: "red" }}>
      <p style={{ textAlign: "center" }}>{errorMessage}</p>
    </div>
  );
};
