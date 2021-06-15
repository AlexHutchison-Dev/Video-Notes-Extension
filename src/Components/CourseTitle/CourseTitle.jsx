import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  color: #555;
  margin-top: 0;
`;
function CourseTitle(props) {
  console.log("courseTitle loaded");
  console.log(props);
  return <div>{props.title && <Title>{props.title}</Title>}</div>;
}

export default CourseTitle;
