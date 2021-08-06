import { FC } from "react";
import { Title, Wrapper } from "./Home.styles";

export const Home: FC = () => {
  return (
    <Wrapper>
      <Title>
        <p>
          React Comet{" "}
          <span role="img" aria-label="comet">
            ☄️
          </span>
        </p>
      </Title>
      <div>
        <p>Thank you for using our template</p>
      </div>
    </Wrapper>
  );
};
