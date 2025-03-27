const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const chatArea = document.getElementById('chat-area');
const usernameInput = document.getElementById('username-input');

let username = '';

// Load saved username and messages from localStorage
document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];

    if (savedUsername) {
        username = savedUsername;
        usernameInput.value = '';
        usernameInput.placeholder = `Welcome back, ${username}`;
    }

    savedMessages.forEach(msg => {
        const chatMessage = document.createElement('div');
        chatMessage.textContent = msg;
        chatArea.appendChild(chatMessage);
    });

    chatArea.scrollTop = chatArea.scrollHeight;
});

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!username) {
        username = usernameInput.value;
        localStorage.setItem('username', username); // Save username
        usernameInput.value = '';
    } else {
        const message = messageInput.value;
        if (message) {
            const chatMessage = `${username}: ${message}`;
            const chatMessageElement = document.createElement('div');
            chatMessageElement.textContent = chatMessage;
            chatArea.appendChild(chatMessageElement);

            // Save message to localStorage
            const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
            savedMessages.push(chatMessage);
            localStorage.setItem('messages', JSON.stringify(savedMessages));

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