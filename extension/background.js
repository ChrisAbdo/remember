chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveHighlightedText",
    title: "Remember",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveHighlightedText") {
    chrome.storage.sync.get("userId", ({ userId }) => {
      if (!userId) {
        console.error("User not authenticated");
        return;
      }
      const remember = {
        userId: userId,
        url: info.selectionText,
      };
      //
      fetch("https://remember-delta.vercel.app/api/save-highlight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(remember),
      })
        .then((response) => response.json())
        .then((data) => console.log("Highlight saved:", data))
        .catch((error) => console.error("Error saving highlight:", error));
    });
  }
});
