const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const chatArea = document.getElementById('chat-area');
const usernameInput = document.getElementById('username-input');

let username = '';

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!username) {
        username = usernameInput.value;
        usernameInput.value = '';
    } else {
        const message = messageInput.value;
        if (message) {
            const chatMessage = document.createElement('div');
            chatMessage.textContent = `${username}: ${message}`;
            chatArea.appendChild(chatMessage);
            messageInput.value = '';
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }
});

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        chatForm.dispatchEvent(new Event('submit'));
    }
});