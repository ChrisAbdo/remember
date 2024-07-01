document.addEventListener("DOMContentLoaded", () => {
  const savedTextsList = document.getElementById("savedTextsList");

  chrome.storage.sync.get("savedTexts", ({ savedTexts = [] }) => {
    savedTextsList.innerHTML = savedTexts
      .map((text) => `<li>${text}</li>`)
      .join("");
  });
});
