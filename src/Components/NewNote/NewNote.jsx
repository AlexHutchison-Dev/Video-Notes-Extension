import React, { useContext, useState } from "react";
import { LectureContext } from "../../Contexts/LectureContext";
import { Container, NoteInput, AddButton } from "./NewNoteElements";

function NewNote() {
  const [lectureContext, changeLectureContext] = useContext(LectureContext);
  const [note, setNote] = useState("");

  function handleChange(event) {
    event.preventDefault();
    console.log(`event: ${event}`);
    setNote(event.target.value);
    console.log("Value Changed!");
  }

  function handleClick(event) {
    event.preventDefault();
    console.log("Button clicked!");
    var lectureNotes = lectureContext.notes;
    console.log(`Note: ${note}`);
    console.log(lectureNotes);
    if (lectureNotes.length > 0)
    {
    lectureNotes.push(note);
    }
    else
    {
      lectureNotes = [note];
    }

    console.log(lectureNotes);
    changeLectureContext({notes: lectureNotes}, () => {
      console.log(`ChangeLectureContext callback`);
    });
  }

  return (
    <Container>
      <NoteInput
        placeholder="Add new note here..."
        value={note}
        onChange={handleChange}
      />
      <AddButton onClick={handleClick}>Add</AddButton>
    </Container>
  );
}

export default NewNote;
