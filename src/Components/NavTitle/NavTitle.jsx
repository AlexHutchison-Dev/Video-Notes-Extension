import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 2rem;
  padding-left: 5%;
  font-family: "Permanent Marker", "Arial Narrow", Arial, sans-serif;
  color: white;
  text-shadow: 2px 2px 2px #555;
  white-space: nowrap;
`;

function Title() {
  return <TitleText className="title">Video Notes</TitleText>;
}

export default Title;
