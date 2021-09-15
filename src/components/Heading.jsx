import React from "react";
import data from "../data";
import styled from "styled-components";

function Heading() {
  return <Title>Hi! I am {data.name}.</Title>;
}

export default Heading;

const Title = styled.h1`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
