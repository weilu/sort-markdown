chrome.contextMenus.onClicked.addListener(function(info, tab) {
  (info.menuItemId == "sort_markdown") && chrome.tabs.executeScript({ file: 'sort.js' });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Sort markdown", "contexts":["editable"], "id": "sort_markdown"});
});