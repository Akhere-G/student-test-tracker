import { AddRecordForm, FormFilter, Records } from "./components";

import { Container, Wrapper, FormWrapper } from "./styles";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <AddRecordForm />
          <FormFilter />
        </FormWrapper>
        <Records />
      </Wrapper>
    </Container>
  );
};

export default App;
