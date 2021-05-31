import React from "react";

import { HeroLane } from "../../components";
import { MainPageContainer } from "./style";

export const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <HeroLane />
    </MainPageContainer>
  );
};
