chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({url: "chrome://restart", active: false});
});
