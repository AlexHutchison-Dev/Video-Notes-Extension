console.log("background loaded!");

var contentTabId = false;

browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender) {
  console.log("request.message: " + request.message);
  messageProcessor[request.message](request, sender);
}

function sendMessage(messageContent, callback) {
  if (messageContent.from === "content") {
    browser.runtime.sendMessage({ from: "background", ...messageContent });
  }
  browser.tabs.sendMessage(contentTabId, {
    ...messageContent,
    from: "background",
  });
}

const messageProcessor = {
  loaded: (request, sender, ) => {
    console.log("backgroung: in objectliteral function loaded");

    contentTabId = sender.tab.id;
  },

  videoSetTime: (request) => {
    console.log("backgroung: in objectliteral function setTime");
    sendMessage({ ...request });
  },
  videoTime: (request) => {
    console.log("backgroung: in objectliteral function videoTime");
    sendMessage({ ...request });
  },
  getVideoTime: (request) => {
    console.log("backgroung: in objectliteral function getVideoTime");
    sendMessage({ ...request });
  },
  getCourseInfo: (request) => {
    console.log("backgroung: in objectliteral function getCourseInfo");
    console.log(contentTabId);
    sendMessage({ ...request });
  },
  courseInfo: (request) => {
    console.log("backgroung: in objectliteral function courseInfo");
    sendMessage({ ...request });
  },
};
