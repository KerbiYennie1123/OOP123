

// location

function openMap() {
  document.getElementById("wmLocation").style.display = "flex";
}

function closeMap() {
  document.getElementById("wmLocation").style.display = "none";
}


// form here

document.getElementById("wmForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const messageBox = document.getElementById("wmThankYouMessage");

  alert(`Thank you, ${name}! We’ve received your message. We’ll contact you at ${email}.`);

  messageBox.style.display = "block";
  messageBox.innerHTML = `
    <strong>Thank you, ${name}!</strong><br>
    Your message has been received and we’ll reach out to you at <em>${email}</em> soon.<br>
    Have a great day!
  `;

  this.reset();
});


// chatbot/willbot here

    
const responses = {
    "What is your return policy?": "Our return policy allows you to return items within 30 days of purchase.",
   "How do I update my shipping address?": [
            "You can update your shipping address by logging into your account and going to 'Account Settings.' From there, you can change your shipping address.",
            "Don't forget to click 'Save' after making the changes to make sure your address is updated!",
            "If you need more assistance, feel free to let me know."
        ],
    "What payment methods do you accept?": "Currently we only accept Gcash and Cash on delivery (COD).",
    "What is your recommended shoe?": "Here are some of our top recommended shoes! ",
    "How can I contact you?": [
        "If you have any concerns, you can contact us through our 'Contact Us' page form.",
        "Alternatively, you can also reach us by calling us at 09123456789.",
        "We're here to assist you with any questions or issues you may have!"
    ],
    "Do you have a customer service number?": "Yes! You can contact our customer service team at 09123456789. We are available at 10AM to 5PM.",
    "What are your working hours?": "Our working hours are from 9 AM to 6 PM, Monday to Friday. We are closed on weekends.",
    "Where is your store located?": "Our store is located at 123 Batumbakal Street, Malolos City, Bulacan. Feel free to visit us anytime during working hours!"
};

 function sendQuestion(question) {
    displayMessage(question, "user");

    if (Array.isArray(responses[question])) {
        setTimeout(() => {
            sendFollowUpResponse(question, 0);
        }, 1000);  
    } else {
        if (question === "What is your recommended shoe?") {
            setTimeout(() => {
                showRecommendationSlider();  
            }, 2000);
        } else {
            setTimeout(() => {
                const botResponse = getBotResponse(question);
                displayMessage(botResponse, "bot");
            }, 1000);
        }
    }
}



function sendFollowUpResponse(question, index) {
        if (index < responses[question].length) {
            displayMessage(responses[question][index], "bot");

            setTimeout(() => {
                sendFollowUpResponse(question, index + 1);
            }, 1500);
        }
    }




function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();
    if (message === "") return;

    displayMessage(message, "user");
    inputField.value = "";

    setTimeout(() => {
        const botResponse = getBotResponse(message);
        displayMessage(botResponse, "bot");
    }, 2000);
}

function displayMessage(message, sender) {
    const chatLog = document.getElementById("chat-log");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");

    if (sender === "bot") {
        messageDiv.innerHTML = `
            <img src="../img1/willbot1.png" alt="WillBot" class="bot-avatar">
            <div class="bubble">${message}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="bubble">${message}</div>
        `;
    }

    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(question) {
    return responses[question] || "Sorry, I didn't understand that. Can you please clarify?";
}

function showRecommendationSlider() {
    const shoeImages = [
        { src: "../img/curry11.png", alt: "CUrry 11" },
        { src: "../img/curry12s.png", alt: "Curry 12" },
        { src: "../img/curry12.png", alt: "Curry 12s" }
    ];

    shoeImages.forEach((shoe, index) => {
        setTimeout(() => {
            const shoeHTML = `
                <div class="chat-message bot-message">
                    <div class="recommendation-slider">
                        <img src="${shoe.src}" alt="${shoe.alt}" class="shoe-image">
                    </div>
                </div>
            `;
            displayMessage(shoeHTML, "bot");

            if (index === shoeImages.length - 1) {
                setTimeout(() => {
                    sendRecommendationExplanation();
                }, 2000); 
            }
        }, index * 2000); 
    });
}

function sendRecommendationExplanation() {
    const chatLog = document.getElementById("chat-log");

    const explanation = `
        <div class="chat-message bot-message">
            These shoes are perfect for different occasions! Whether you're looking for comfort, style, or performance, we've got you covered. Let me know if you'd like more details!
        </div>
    `;
    displayMessage(explanation, "bot");
}


function toggleChat() {
            const chatContainer = document.querySelector('.chat-container');
            if (chatContainer.style.visibility === 'visible') {
                chatContainer.style.opacity = '0';
                chatContainer.style.visibility = 'hidden';
            } else {
                chatContainer.style.opacity = '1';
                chatContainer.style.visibility = 'visible';
            }
        }


function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer.style.visibility === 'visible') {
        chatContainer.style.opacity = '0';
        chatContainer.style.visibility = 'hidden';
    } else {
        chatContainer.style.opacity = '1';
        chatContainer.style.visibility = 'visible';
    }
}



function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    const overlay = document.getElementById('chat-overlay');
    const isVisible = chatContainer.style.opacity === '1';

    if (isVisible) {
        chatContainer.style.opacity = '0';
        chatContainer.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    } else {
        chatContainer.style.opacity = '1';
        chatContainer.style.visibility = 'visible';
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
    }
}

