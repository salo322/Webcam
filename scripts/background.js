let active = null;
let on = false;

function reload (newMode) {
  
}
function start (tabId) {
  chrome.tabs.executeScript(tabId, { file: "scripts/camera.js" });
  chrome.tabs.executeScript(tabId, {
    code:'document.querySelector("#videoElement").style.display = "block"'
  })
  on = true;
  reload();
}
function stop (tabId) { 
chrome.tabs.executeScript(tabId, {
  code:'document.querySelector("#videoElement").style.display = "none"'
})
  on = false;
  reload();
}

chrome.browserAction.onClicked.addListener(function (tab) {
  let url = tab.url;
   secure = url.match(/^https:\/\//i);
  if (on) {
    if (active) {
      stop(active);
    }
  } else {
    if (secure) {
      active = tab.id;
      start(active);
    }
  }
});

function updateTab (tabId) {
  chrome.tabs.get(tabId, function (tab) {
    let url = tab.url;
    let secure = url.match(/^https:\/\//i);
    if (on && active && secure) {
     stop(active);
      active = tabId;
      start(active);
    }
  });
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  if (changeInfo && changeInfo.status === 'complete') {
      updateTab(tabId);
  }
});

chrome.tabs.onUpdated.addListener(function (tabId) {
    updateTab(tabId); 
});


