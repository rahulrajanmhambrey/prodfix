chrome.commands.onCommand.addListener((command) => {
    if (command === 'task') {
        console.log("Creating task...");
    
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "callContentScriptFunction" });
          });
    }
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.frameId === 0) { 
        console.log("Page has finished loading:", details.url);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "pageFinishLoading" });
          });
    }    
}, {url: [{schemes: ['http', 'https']}]});