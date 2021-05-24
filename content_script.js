// Put all the javascript code here, that you want to execute after page load.
console.log("content loaded!");
var courseInfo = extractCourseInfo();
var video = document.getElementsByTagName("video");

browser.runtime.onMessage.addListener(handleMessage);
browser.runtime.sendMessage({
  from: "content",
  loaded: true,
  message: "loaded",
});

window.addEventListener("hashchange", () => {
  console.log("hashchange");
  courseInfo = extractCourseInfo();
  messageProcessor["getCourseInfo"];
});

function handleMessage(request, sender, sendResponce) {
  console.log("content recieved message: " + request.message);
  if (messageProcessor[request.message]) {
    messageProcessor[request.message](request, sender);
  }
}

function extractCourseInfo() {
  console.log("extracting course info");
  const courseTitle = getCourseTitle();
  const sectionTitle = getSectionTitle();
  const lectureTitle = getLectureTitle();
  const url = window.location.href;
  console.log(url);
  video = document.getElementsByTagName("video");

  return {
    courseTitle: courseTitle,
    sectionTitle: sectionTitle,
    lectureTitle: lectureTitle,
    url: url,
  };
}

function getCourseTitle() {
  return (title =
    document.getElementsByTagName("h1")[0].childNodes[0].childNodes[0]
      .childNodes[0].childNodes[0].innerHTML);
}

function getSectionTitle() {
  const sections = document.getElementsByClassName("section--section--BukKG");

  for (let i = 0; i < sections.length; i++) {
    const expanded = sections[i].getAttribute("aria-expanded");
    if (expanded === "true") {
      return sections[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0]
        .childNodes[0].innerHTML;
    }
  }
}

function getLectureTitle() {
  const lectures = document.getElementsByClassName(
    "curriculum-item-link--is-current--31BPo"
  );
  return lectures[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0]
    .childNodes[0].childNodes[0].innerHTML;
}

function sendMessage(messageContent) {
  browser.runtime.sendMessage({ ...messageContent, from: "content" });
}

const messageProcessor = {
  getCourseInfo: () => {
    console.log("in content object literal getCourseInfo");
    if (window.location.href !== courseInfo.url) {
      courseInfo = extractCourseInfo();
    }
    sendMessage({
      message: "courseInfo",
      courseInfo: {
        ...courseInfo,
      },
    });
  },
  getVideoTime: () => {
    const videoTime = video[0].currentTime;
    sendMessage({ message: "videoTime", videoTime: videoTime });
  },
  videoSetTime: (request) => {
    video[0].currentTime = request.value;
    video[0].play();
    console.log(video[0].currentTime);
  },
};
