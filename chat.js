document.getElementById('sendBtn').addEventListener('click', sendMessage);

document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevents the default action (like form submission)
        sendMessage();  // Calls the sendMessage function when Enter is pressed
    }
});

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');

    if (userInput.value.trim() !== '') {
        // Append user's message
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput.value;
        userMessage.classList.add('message', 'user-message');
        messages.appendChild(userMessage);

        // Get user's input and clear the input box
        const userMessageValue = userInput.value.trim().toLowerCase();
        userInput.value = '';

        // Chatbot's response based on user input
        let botResponse = '';

        if (userMessageValue.includes('fees')) {
            botResponse = 'Fees: The fees structure varies by course. For detailed info, visit our website or contact the admissions office.';
        } else if (userMessageValue.includes('infrastructure')) {
            botResponse = 'Infrastructure: Modern classrooms, labs, libraries, sports facilities, and separate hostels for boys and girls.';
        } else if (userMessageValue.includes('courses')) {
            botResponse = 'Courses: We offer undergraduate, postgraduate, diploma, and research programs in engineering, science, and management.';
        } else if (userMessageValue.includes('hostel')) {
            botResponse = 'Hostel: Fully equipped hostels with Wi-Fi, quality meals, 24/7 security, and recreational areas.';
        } else if (userMessageValue.includes('admission')) {
            botResponse = 'Admissions: Applications are open. Visit the admissions portal or contact us for eligibility and deadlines.';
        } else if (userMessageValue.includes('events')) {
            botResponse = 'Events: Stay tuned for workshops, cultural fests, and seminars. Follow us on social media for updates.';
        } else if (userMessageValue.includes('placements')) {
            botResponse = 'Placements: Top companies visit our campus. Our placement cell provides training and support for securing jobs.';
        } else if (userMessageValue.includes('contact')) {
            botResponse = 'Contact: Reach us at +91-1234567890 or email us at info@cietcollege.edu.';
        } else if (userMessageValue.includes('library')) {
            botResponse = 'Library: Our library houses thousands of books, journals, and e-resources, with 24/7 access to online materials.';
        } else if (userMessageValue.includes('sports')) {
            botResponse = 'Sports: We offer facilities for football, cricket, basketball, and indoor games like chess and table tennis.';
        } else if (userMessageValue.includes('transport')) {
            botResponse = 'Transport: We provide a fleet of buses for students and staff across various locations.';
        } else if (userMessageValue.includes('faculty')) {
            botResponse = 'Faculty: Our experienced professors are highly qualified and dedicated to student success.';
        } else if (userMessageValue.includes('canteen')) {
            botResponse = 'Canteen: Our canteen serves a variety of hygienic and affordable meals to suit everyone’s taste.';
        } else if (userMessageValue.includes('clubs')) {
            botResponse = 'Clubs: Join technical, cultural, and hobby clubs to enhance skills and network with peers.';
        } else {
            botResponse = 'CIET: Hi there! I can assist you with information about fees, courses, hostel, placements, and more. How can I help?';
        }

        // Append chatbot's response
        const botMessage = document.createElement('div');
        botMessage.textContent = botResponse;
        botMessage.classList.add('message', 'bot-message');
        messages.appendChild(botMessage);

        // Scroll to the latest message
        messages.scrollTop = messages.scrollHeight;
    }
}
