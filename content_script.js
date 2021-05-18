// Put all the javascript code here, that you want to execute after page load.
console.log("content loaded!");
const courseTitle = getCourseTitle();
const sectionTitle = getSectionTitle();
const lectureTitle = getLectureTitle();
const video = document.getElementsByTagName("video");
console.log(courseTitle);
console.log(sectionTitle);
console.log(lectureTitle);

browser.runtime.onMessage.addListener(handleMessage);
browser.runtime.sendMessage({from: "content", loaded: true});

function handleMessage(request, sender, sendResponce) {
  console.log("content recieved message: " + request.message);


  if (request.getCourseInfo) {
    console.log("content sending courseInfo")

    browser.runtime.sendMessage({from: "content", courseInfo: {courseTitle: courseTitle , sectionTitle: sectionTitle, lectureTitle: lectureTitle}})

  }

  if (request.getVideoTime)
  {
      const videoTime = video[0].currentTime;
      browser.runtime.sendMessage({from: "content", videoTime: videoTime});
  }

  if (request.videoSetTime){
    console.log("content: set time message recieved");
    console.log(`currentTime: ${video[0].currentTime} requestedTime ${request.value}`);

    video[0].pause();
    video[0].currentTime = request.value;
    console.log(`currentTime: ${video[0].currentTime} requestedTime ${request.value}`);
    video[0].play();
  }
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
  const lectures = document.getElementsByClassName("curriculum-item-link--is-current--31BPo");
  return lectures[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
}