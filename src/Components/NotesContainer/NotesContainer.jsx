import React, { useEffect, useContext } from "react";
import { LectureContext } from "../../Contexts/LectureContext";
import styled from "styled-components";

import Note from "../Note/Note";

function NotesContainer() {
  const [lectureContext, changeLectureContext] = useContext(LectureContext);

  useEffect(() => {}, [lectureContext]);
  console.log("NOtes Container");
  console.table(lectureContext);

  const Container = styled.div`
    padding: 3% 5% 7%;
  `;

  return (
    <Container>
      {lectureContext.notes.map((note) => {
        console.log(`in map: ${note}`);
        return <Note note={note} />;
      })}
    </Container>
  );
}

export default NotesContainer;
