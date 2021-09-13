import { React, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Overview from "./components/Overview";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [overview, setOverview] = useState({
    grandTotal: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  //extract data using destructuring method, this avoid data.brand, etc.
  const { grandTotal, data } = overview;

  return (
    <Container>
      <Header tittle="Car Insurance Quote App" />

      <FormContainer>
        <Form setOverview={setOverview} setLoading={setLoading} />

        {loading ? <Spinner /> : null}

        {loading ? null : <Overview data={data} />}

        {loading ? null : <Result grandTotal={grandTotal} />}
      </FormContainer>
    </Container>
  );
}

export default App;
