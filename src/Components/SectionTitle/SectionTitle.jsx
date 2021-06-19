import React from 'react';
import styled from "styled-components";

function SectionTitle(props) {
  const Title = styled.div`
    border: 1px solid #bbb;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #555;
  `;

  const TitleText = styled.h2`
    font-size: 1rem;
    font-weight: bold;
  `;

  return (
    <Title>
      <TitleText>{props.title}</TitleText>
    </Title>
  );
}

export default SectionTitle;