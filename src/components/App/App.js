import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <Wrapper>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </Wrapper>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
