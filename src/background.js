
var filterUrls = [
  "*://*.baidu.com/*.js*",
  "*://*.baidustatic.com/*.js*",
  "*://sjs.sinajs.cn/blog7common/js/boot.js",
    

  /* Vicitm. It won't block direct access. 
    It just block request as script and image */
  "*://*.github.com/greatfire",
  "*://*.github.com/cn-nytimes"    
];

chrome.webRequest.onBeforeRequest.addListener(function(info) {
    
        console.log("Blocked: " , info.url);
    
        return { cancel : true};
    },{
        urls: filterUrls,
        types: ["script","image"]        
    },["blocking"]
                                             
 );