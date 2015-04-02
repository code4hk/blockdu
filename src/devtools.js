console.log("loaded");


function Console() {
}

Console.Type = {
  LOG: "log",
  DEBUG: "debug",
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  GROUP: "group",
  GROUP_COLLAPSED: "groupCollapsed",
  GROUP_END: "groupEnd"
};

Console.addMessage = function(type, format, args) {
  chrome.extension.sendRequest({
      command: "sendToConsole",
      tabId: chrome.devtools.tabId,
      args: escape(JSON.stringify(Array.prototype.slice.call(arguments, 0)))
  });
};


chrome.devtools.network.onRequestFinished.addListener(function(request) {
     console.log(request.response);
    
});

      