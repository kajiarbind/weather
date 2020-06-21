import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 0.9rem;
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 0.8rem;
`;

const Location = ({ city, country }) => {
  return (
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
