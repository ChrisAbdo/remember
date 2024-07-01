document.addEventListener("DOMContentLoaded", () => {
  const userIdForm = document.getElementById("userIdForm");
  const userIdInput = document.getElementById("userIdInput");
  const statusDiv = document.getElementById("status");

  chrome.storage.sync.get("userId", ({ userId }) => {
    if (userId) {
      statusDiv.textContent = "Account linked successfully.";
      userIdForm.style.display = "none";
    }
  });

  userIdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userId = userIdInput.value.trim();
    if (userId) {
      chrome.storage.sync.set({ userId }, () => {
        statusDiv.textContent = "Account linked successfully.";
        userIdForm.style.display = "none";
      });
    }
  });
});
