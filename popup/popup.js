var courseInfo;

browser.runtime.sendMessage({ from: "popup", getCourseInfo: true });

browser.runtime.onMessage.addListener(handleMessage);

console.log("popup!");
const noteInput = document.getElementById("note");

noteInput.addEventListener(
  "click",
  (event) => {
    console.log("eventCaptured")
    browser.runtime.sendMessage({ from: "content", getVideoTime: true });
    
  }
);

function handleMessage(message) {
  console.log(message);
  console.log(`courseInfo: ${courseInfo}`);
  if (message.courseInfo && courseInfo !== message.courseInfo) {
    courseInfo = { ...message.courseInfo };
    console.log(`inside if courseInfo: ${courseInfo}`);

    renderCourseInfo();
  }
  if (message.videoTime) {
    courseInfo = {...courseInfo, videoTime: message.videoTime};
    renderCourseInfo();
  }
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
    console.log("inside videotime if");
    const timeLink = createVideoTimeLink();
    document.body.appendChild(timeLink);
    
  }
}

function createVideoTimeLink(){
  const videoSetTime = document.createElement("button");
    videoSetTime.innerHTML = "Watch Again" + courseInfo.videoTime;
    videoSetTime.setAttribute("value", courseInfo.videoTime);
    videoSetTime.setAttribute("id", "link");
    videoSetTime.addEventListener("click", () => {
      browser.runtime.sendMessage({from: "popup", videoSetTime: true, value: videoSetTime.value});
    });
    return videoSetTime;
}
