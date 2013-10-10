(function () {
    "use strict";

    function restart() {
        chrome.tabs.create({url: "chrome://restart", active: false});
    }

    chrome.browserAction.onClicked.addListener(restart);
    chrome.commands.onCommand.addListener(restart);
})();
