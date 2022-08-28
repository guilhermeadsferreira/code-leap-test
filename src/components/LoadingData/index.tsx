import React, { FC, ReactNode } from "react";
import Loading from "../Loading";
import { Container } from "./styles";

type Props = {
  loading: boolean;
  children: ReactNode;
};

const LoadingData: FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <Container>
          <Loading size="large" />
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingData;
