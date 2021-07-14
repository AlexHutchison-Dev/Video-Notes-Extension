import React, { useContext, useState, useEffect } from "react";
import { LectureContext } from "../../Contexts/LectureContext";
import { Container, NoteInput, AddButton } from "./NewNoteElements";

function NewNote() {
  const [lectureContext, changeLectureContext] = useContext(LectureContext);
  const [note, setNote] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    const noteInput = document.getElementById("note");
    noteInput.focus();

    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  return (
    <Container>
      <NoteInput
        type="text"
        placeholder="Add new note here..."
        value={note}
        onChange={handleChange}
        id="note"
      />
      <AddButton onClick={handleClick}>Add</AddButton>
    </Container>
  );

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      console.log("enter pressed!");
      handleClick(event);
    }
  }

  function handleChange(event) {
    event.preventDefault();
    setNote(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log("Button clicked!");

    browser.runtime.sendMessage({ from: "popup", message: "getVideoTime" });

    var lectureNotes = lectureContext.notes;
    console.log(`Note: ${note}`);
    console.log(lectureNotes);

    lectureNotes.length > 0
      ? lectureNotes.push({
          text: note,
          time: lectureContext.storedVideoTime,
        })
      : (lectureNotes = [{ text: note, time: lectureContext.storedVideoTime }]);

    console.log(lectureNotes);
    changeLectureContext({ notes: lectureNotes }, () => {
      console.log(`ChangeLectureContext callback`);
      setNote("");
    });
  }
}

export default NewNote;
