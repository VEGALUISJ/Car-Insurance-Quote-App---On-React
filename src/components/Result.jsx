import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Container = styled.p`
  padding: 1rem;
  background-color: rgb(127, 224, 237);
  margin-top: 2 rem;
  text-align: center;
  border-radius: 5px;
`;

const ContainerResult = styled.p`
  background-color: #26c6da;
  color: #fff;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
`;

const Result = ({ grandTotal }) => {
  return grandTotal === 0 ? (
    <Container>
      Please select brand, year and plan you would like to quote for your car.
    </Container>
  ) : (
    <ContainerResult>Quotation total is ${grandTotal}</ContainerResult>
  );
};

export default Result;
