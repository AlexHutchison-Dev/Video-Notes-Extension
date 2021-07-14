import styled from "styled-components";

export const NoteBorder = styled.div`
  border: 1px solid #bbb;
  border-radius: 5px;
  margin: 5px;
  padding: 3%;
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NoteText = styled.p`

  font-size: 0.8rem;
  justify-self: flex-start;
`;

export const TimeText = styled.div`
  
  font-size: 0.8rem;
  justify-self: flex-end;
`;
