import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtainDiffYear, brandCalculation, planCalculation } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  padding: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
  border-radius: 5px;
`;

const Form = ({ setOverview }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  //Error state when user send wrong information
  const [error, setError] = useState(false);

  //getting data from the values of the state
  const { brand, year, plan } = data;

  //reading data from the form and putting on the state
  const getInformation = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    //base price will be $2000
    let result = 2000;

    //get the difference between years
    const yearDifference = obtainDiffYear(year);

    //per year will substrat 3%
    result -= (yearDifference * 3 * result) / 100;

    //American will be 15%
    //Asian will be 5%
    //European will be 30%
    result = brandCalculation(brand) * result;

    //basic plan increase 20%
    //fullCover plan increase 50%
    const increasePlan = planCalculation(plan);
    result = parseFloat(result * increasePlan).toFixed(2);
    console.log(result);

    //grand total after calculation and sending this infor thru props.
    setOverview({
      grandTotal: result,
      data,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Please fill out all fields and try again!</Error> : null}

      <Field>
        <Label>Brand: </Label>
        <Select name="brand" value={brand} onChange={getInformation}>
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="European">European</option>
        </Select>
      </Field>

      <Field>
        <Label>Year: </Label>
        <Select name="year" value={year} onChange={getInformation}>
          <option value="">-- Select --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Coverage Type: </Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getInformation}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="fullCover"
          checked={plan === "fullCover"}
          onChange={getInformation}
        />{" "}
        Full Cover
      </Field>

      <Button type="submit">Quote Now</Button>
    </form>
  );
};

export default Form;
