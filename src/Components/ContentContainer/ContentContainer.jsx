import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import {Container} from './ContentContainerComponents';

import CourseTitle from "../CourseTitle/CourseTitle";
import LectureTitle from "../LectureTitle/LectureTitle";
import SectionTitle from "../SectionTitle/SectionTitle";


export default function () {
  console.log("popup loaded!");

  const [courseInfo, setCourseInfo] = useState(0);
  console.log("CourseInfo console.table")
  console.table(courseInfo);
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
      if (courseInfo !== message.courseInfo) {
        setCourseInfo({...message.courseInfo});
        console.log(`inside if courseInfo`);
        console.log(`Popup message processor courseInfo:  ${courseInfo}`);
        console.table(courseInfo);
      }
    },
    videoTime: (message) => {
      console.log("popup: in objectliteral videoTime" + message);

      <CourseTitle title={courseInfo.courseTitle} />;
    },
  };

  return (
    <Container>
      {courseInfo.courseTitle && 
      <div>
      <CourseTitle title={courseInfo.courseTitle} />
      <SectionTitle title={courseInfo.sectionTitle.replace("&amp;", "&")} />
      <LectureTitle title={courseInfo.lectureTitle}/>
      </div>
      }
    </Container>
  );
}
