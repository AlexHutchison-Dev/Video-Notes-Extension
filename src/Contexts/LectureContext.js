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
    console.log("inside updateLectureContext ");
    setLectureContext((prevValue) => {
      // console.log(`changLectureContext modifier title: ${modifier.courseInfo.title} `)
      // console.table(modifier);
      return { ...prevValue, ...modifier };
    });
    callback();
  };

  return (
    <LectureContext.Provider value={[lectureContext, changeLectureContext]}>
      {props.children}
    </LectureContext.Provider>
  );
};
