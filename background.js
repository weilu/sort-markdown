chrome.contextMenus.onClicked.addListener(function(info, tab) {
  (info.menuItemId == "markdown_sort") && chrome.tabs.executeScript({ file: 'sort.js' });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Sort", "contexts":["editable"], "id": "markdown_sort"});
});