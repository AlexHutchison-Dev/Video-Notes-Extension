// browser.runtime.onMessage.addListener(handleMessage);

// console.log("background!");

// function handleMessage(message) {
//     console.log("hi from background, ", message.message);
//     browser.runtime.sendMessage({message: "Background calling content"})
// }

console.log("background loaded!"); 

let contentPort;

function connectToContent(port)
{
    contentPort = port;
    contentPort.postMessage({greeting: "background to content"});
    contentPort.onMessage.addListener((message) => {
        console.log(message.greeting);
    });
}

browser.runtime.onConnect.addListener(connectToContent);