
var filterUrls = [
  "*://*.baidu.com/*.js*",
  "*://*.baidustatic.com/*.js*"   
];

chrome.webRequest.onBeforeRequest.addListener(function(info) {
    
        console.log("Blocked: " , info.url);
    
        return { cancel : true};
    },{
        urls: filterUrls,
        types: ["script","image"]        
    },["blocking"]
                                             
 );