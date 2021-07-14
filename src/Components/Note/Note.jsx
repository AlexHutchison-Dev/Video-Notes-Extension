import React from "react";
import { NoteBorder, NoteText, TimeText } from "./NoteElements";

function Note(props) {
  console.log("Note created");
  return (
    <NoteBorder>
      <NoteText>{props.note.text}</NoteText>

      <TimeText>
        {props.note.time ? props.note.time.toFixed(2) : ""}
      </TimeText>
    </NoteBorder>
  );
}

export default Note;
