console.log("background loaded!");

var contentLoaded = false;
var contentTabId;

browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponce) {
  messageProcessor[request.message](request, sender);
}

function sendMessage( messageContent) {
  if (messageContent.from === content) {
    browser.runtime.sendMessage({ from: "background", ...messageContent });
  }
  browser.tabs.sendMessage(contentTabId, {
    ...messageContent,
    from: "background",
  });
}

const messageProcessor = {
  loaded: (request, sender) => {
    console.log("in objectliteral function loaded");
    contentLoaded = true;
    contentTabId = sender.tab.id;
  },

  videoSetTime: (request) => {
    console.log("in objectliteral function setTime");
    sendMessage({ ...request });
  },
  videoTime: (request) => {
    console.log("in objectliteral function videoTime");
    sendMessage({ ...request });
  },
  getVideoTime: (request) => {
    console.log("in objectliteral function getVideoTime");
    sendMessage({ ...request });
  },
  getCourseInfo: (request) => {
    console.log("in objectliteral function getCourseInfo");
    sendMessage({ ...request });
  },
  courseInfo: (request) => {
    console.log("in objectliteral function courseInfo");
    sendMessage({ ...request });
  },
};
