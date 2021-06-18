import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
`;

export const NoteInput = styled.input`
  width: 70%;
  border: 1px solid #555;
  border-radius: 2px;
  box-shadow: 1 1 1 #555;
  height: 45%;
`;

export const AddButton = styled.button`
  width: 20%;
  color: #8216a8;
  box-shadow: 1 1 1 #555;
  height: 45%;
`;
