import React, { ReactNode } from "react";
import { Container, LoadingIndicator } from "./styles";

type Props = {
  loading: boolean;
  children: ReactNode;
};

const LoadingData: React.FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <Container>
          <LoadingIndicator />
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingData;
