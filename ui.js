// Chat functionality
function sendMessage() {
    const messages = document.getElementById("messages");
    const input = document.getElementById("message-input");
    if (input.value.trim()) {
        const newMessage = document.createElement("p");
        newMessage.textContent = input.value;
        messages.appendChild(newMessage);
        input.value = "";
    }
}
