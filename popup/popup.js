console.log("popup loaded!");

var courseInfo;

browser.runtime.sendMessage({
  from: "popup",
  getCourseInfo: true,
  message: "getCourseInfo",
});

browser.runtime.onMessage.addListener(handleMessage);

const noteInput = document.getElementById("note");

noteInput.addEventListener("click", (event) => {
  browser.runtime.sendMessage({
    from: "content",
    getVideoTime: true,
    message: "getVideoTime",
  });
});

function handleMessage(request) {
  messageProcessor[request.message](request);
}

function renderCourseInfo() {
  console.table(courseInfo);
  const heading = document.getElementById("myHeading");
  const courseTitleElement = document.getElementById("courseTitle");

  if (!courseTitleElement) {
    const courseTitle = document.createElement("h1");
    courseTitle.innerHTML = courseInfo.courseTitle;
    courseTitle.id = "courseTitle";
    const sectionTitle = document.createElement("h2");
    sectionTitle.innerHTML = courseInfo.sectionTitle;

    const lectureTitle = document.createElement("h3");
    lectureTitle.innerHTML = courseInfo.lectureTitle;

    document.body.insertBefore(courseTitle, heading);
    document.body.insertBefore(sectionTitle, heading);
    document.body.insertBefore(lectureTitle, heading);
    document.body.removeChild(heading);
  }
  if (courseInfo.videoTime) {
    consoe.log("inside videotime if");
    const timeLink = createVideoTimeLink();
    document.body.appendChild(timeLink);
  }
}

function createVideoTimeLink() {
  const videoSetTime = document.createElement("button");
  videoSetTime.innerHTML = "Watch Again" + courseInfo.videoTime;
  videoSetTime.setAttribute("value", courseInfo.videoTime);
  videoSetTime.setAttribute("id", "link");
  videoSetTime.addEventListener("click", () => {
    browser.runtime.sendMessage({
      from: "popup",
      videoSetTime: true,
      value: videoSetTime.value,
      message: "videoSetTime",
    });
  });
  return videoSetTime;
}
const messageProcessor = {
  courseInfo: (message) => {
    console.log("popup: in objectliteral courseInfo" + message);
    if (courseInfo !== message.courseInfo) {
      courseInfo = { ...message.courseInfo };
      console.log(`inside if courseInfo`);
      console.table(courseInfo);

      renderCourseInfo();
    }
  },
  videoTime: (message) => {
    console.log("popup: in objectliteral videoTime" + message);

    courseInfo = { ...courseInfo, videoTime: message.videoTime };
    renderCourseInfo();
  },
};
