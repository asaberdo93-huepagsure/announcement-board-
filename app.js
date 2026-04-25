const inputBox = document.getElementById("messageInput");
const postButton = document.getElementById("postBtn");
const outputBox = document.getElementById("outputBox");

postButton.addEventListener("click", function() {
  outputBox.innerText = inputBox.value;
  inputBox.value = "";
});