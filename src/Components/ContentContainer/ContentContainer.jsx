import React, { useEffect, useContext } from "react";
import { LectureContext } from "../../Contexts/LectureContext";

import { Container } from "./ContentContainerComponents";

import CourseTitle from "../CourseTitle/CourseTitle";
import LectureTitle from "../LectureTitle/LectureTitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import NewNote from "../NewNote/NewNote";

export default function () {
  console.log("popup loaded!");

  const [lectureContext, changeLectureContext] = useContext(LectureContext);
  console.log("CourseInfo console.table");
  console.table(lectureContext.courseInfo);
  useEffect(() => {
    browser.runtime.onMessage.addListener(handleMessage);

    browser.runtime.sendMessage({
      from: "popup",
      getCourseInfo: true,
      message: "getCourseInfo",
    });
  }, []);

  function handleMessage(request) {
    console.log(`Popup recieved a message: ${request.message}`);
    messageProcessor[request.message](request);
  }

  const messageProcessor = {
    courseInfo: (message) => {
      console.log("popup: in objectliteral courseInfo" + message.courseInfo);
      console.table(message.courseInfo);
      if (lectureContext.courseInfo !== message.courseInfo) {
        changeLectureContext({ ...message }, () => {
          console.table(lectureContext);
        });
        console.log(`inside if courseInfo`);
      }
    },
    videoTime: (message) => {
      console.log("popup: in objectliteral videoTime" + message);

      <CourseTitle title={lectureContext.courseInfo.courseTitle} />;
    },
  };

  return (
    <Container>
      {lectureContext.courseInfo.courseTitle && (
        <div>
          <CourseTitle title={lectureContext.courseInfo.courseTitle} />
          <SectionTitle
            title={lectureContext.courseInfo.sectionTitle.replace("&amp;", "&")}
          />
          <LectureTitle title={lectureContext.courseInfo.lectureTitle} />
        </div>
      )}
      <NewNote />
      
    </Container>
  );
}
