import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #00838f;
  color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  border-radius: 5px;
`;

const overview = ({ data }) => {
  //extrating from data
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <Container>
      <h2>Quotation Overview</h2>

      <ul>
        <li>Brand: {brand}</li>
        <li>Plan: {plan}</li>
        <li>Year: {year}</li>
      </ul>
    </Container>
  );
};

export default overview;
