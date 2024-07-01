document.addEventListener("DOMContentLoaded", () => {
  const userIdForm = document.getElementById("userIdForm");
  const userIdInput = document.getElementById("userIdInput");
  const statusDiv = document.getElementById("status");

  chrome.storage.sync.get("userId", ({ userId }) => {
    if (userId) {
      verifyUserId(userId);
    }
  });

  userIdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userId = userIdInput.value.trim();
    if (userId) {
      verifyUserId(userId);
    }
  });

  function verifyUserId(userId) {
    fetch("https://remember-delta.vercel.app/api/verify-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          statusDiv.textContent = data.error;
        } else {
          statusDiv.textContent = `Account linked successfully. Welcome, ${data.name}!`;
          chrome.storage.sync.set({ userId });
          userIdForm.style.display = "none";
        }
      })
      .catch((error) => {
        statusDiv.textContent = "Error verifying user.";
        console.error("Error verifying user:", error);
      });
  }
});
