console.log("background loaded!");

var contentLoaded = false;
var contentTabId;

browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponce) {
  console.log("handleMessage called");
  if (request.courseInfo) {
    console.log("background recieved course info");
    browser.runtime.sendMessage({
      from: "background",
      courseInfo: { ...request.courseInfo, url: sender.url },
    });
  }

  if (request.getCourseInfo) {
    console.log("background getting courseinfo");
    browser.tabs.sendMessage(contentTabId, { from: "background", getCourseInfo: true });
    
  }

  if (request.getVideoTime)
  {
    console.log("background getting getVideoTime");
    browser.tabs.sendMessage(contentTabId, {from: "background", getVideoTime: true});
  }

  if (request.videoTime)
  {
    browser.runtime.sendMessage({from: "background", videoTime: request.videoTime});
  }

  if(request.videoSetTime)
  {
    console.log("background: settime message recieved");
    browser.tabs.sendMessage(contentTabId, {from: "background", videoSetTime: true, value: request.value});
  }

  if (request.loaded) {
    console.log(sender)
    console.log("contentLoaded" + request);
    contentLoaded = true;
    contentTabId = sender.tab.id;
    // console.log(browser.runtime.hasListener());
  }
}



function sendMessage(messageContent) {
  browser.runtime.sendMessage({ from: "background", ...messageContent });
}
