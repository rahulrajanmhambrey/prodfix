chrome.commands.onCommand.addListener((command) => {
    if (command === 'task') {
        console.log("Creating task...");
    
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "callContentScriptFunction" });
          });
    }
});