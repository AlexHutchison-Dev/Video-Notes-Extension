// Put all the javascript code here, that you want to execute after page load.


    // video = document.getElementsByTagName("video");

    // console.log(video[0]);
    console.log("content loaded!"); 


    let contentPort = browser.runtime.connect({name: "portContentScript"});

    contentPort.postMessage({greeting: "content to background"});

    contentPort.onMessage.addListener((message) => {
        console.log(message.greeting);
    });

    contentPort.postMessage({greeting: "Iguess the connection is open now."})