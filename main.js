const chatBox = document.getElementById('chat-box');
let ws = new WebSocket('wss://your-websocket-server-url'); // Replace with WebSocket server URL

ws.onmessage = function(event) {
    let message = document.createElement('p');
    message.textContent = event.data;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    let message = document.getElementById('message').value;
    if (message.trim()) {
        ws.send(message);
        document.getElementById('message').value = ''; // Clear input
    }
}
