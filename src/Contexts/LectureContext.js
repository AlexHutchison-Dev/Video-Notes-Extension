import React, { useState, createContext } from "react";

export const LectureContext = createContext();

export const LectureContextProvider = (props) => {
  const defaultState = {
    url: "",
    courseInfo: {},
    notes: [],
  };

  const [lectureContext, setLectureContext] = useState(defaultState);

  const changeLectureContext = (modifier, callback) => {
    console.log("inside updateLectureContext");
    setLectureContext((prevValue) => {
      return { ...prevValue, ...modifier };
    });
    callback();
  };

  return (
    <LectureContextProvider value={[lectureContext, changeLectureContext]}>
      {props.children}
    </LectureContextProvider>
  );
};
