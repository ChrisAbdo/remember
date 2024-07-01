chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveHighlightedText",
    title: "Remember",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveHighlightedText") {
    chrome.storage.sync.get("savedTexts", ({ savedTexts = [] }) => {
      savedTexts.push(info.selectionText);
      chrome.storage.sync.set({ savedTexts });
    });
  }
});
