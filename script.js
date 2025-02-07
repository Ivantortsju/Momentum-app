const todoList = document.getElementById("todoList");
const progressTracker = document.getElementById("progressTracker");
const nameInput = document.getElementById("nameInput");
const greetText = document.getElementById("greetText");
const todoInput = document.getElementById("todoInput");

let totalTasks = 0, completedTasks = 0;

function updateProgress() {
    const progress = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
    progressTracker.innerText = `Progress: ${completedTasks}/${totalTasks} (${progress}%)`;
}

nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        greetText.innerText = `Hello, ${e.target.value}!`;
        e.target.style.display = "none";
    }
});

todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const task = e.target.value.trim();
        if (task) addTodoItem(task);
        e.target.value = "";
    }
});

function addTodoItem(task) {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn">✖</button>`;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        completedTasks += li.classList.contains("completed") ? 1 : -1;
        updateProgress();
    });

    li.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        if (li.classList.contains("completed")) completedTasks--;
        li.remove();
        totalTasks--;
        updateProgress();
    });

    todoList.appendChild(li);
    totalTasks++;
    updateProgress();
}

function toggleTodoWindow() {
    const todoWindow = document.getElementById("todoWindow");
    todoWindow.style.display = todoWindow.style.display === "none" ? "block" : "none";
}

function closeTodoWindow() {
    document.getElementById("todoWindow").style.display = "none";
}

function updateTimeDate() {
    const now = new Date();
    document.getElementById("timeDate").innerText = `${now.toLocaleDateString()} | ${now.toLocaleTimeString()}`;
}

function changeBackground() {
    const images = [
        "https://static.vecteezy.com/system/resources/previews/022/776/818/large_2x/the-landscape-of-the-city-at-night-time-cityscape-with-houses-and-buildings-and-the-beautiful-night-sky-video-game-concept-art-with-anime-style-free-illustration-image-by-ai-generated-free-photo.jpg",
        "https://images.hdqwalls.com/download/japanese-temple-illustration-pu-2560x1440.jpg",
        "https://images.hdqwalls.com/wallpapers/japan-anime-sky-4k-3k.jpg",
        "https://getwallpapers.com/wallpaper/full/c/b/8/1238930-japan-wallpaper-4k-3840x2160-windows-xp.jpg",
        "https://getwallpapers.com/wallpaper/full/d/4/f/1408169-most-popular-anime-city-wallpapers-2560x1440-4k.jpg"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.background = `url('${randomImage}') no-repeat center center/cover`;
}

setInterval(updateTimeDate, 1000);
setInterval(changeBackground, 30000);
updateTimeDate();
changeBackground();


const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Act as if what you do makes a difference. It does. - William James"
];

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");

let currentQuoteIndex = 0;

// Function to display the next quote
function displayNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteDisplay.innerText = quotes[currentQuoteIndex];
}

// Rotate quotes every 10 seconds
setInterval(displayNextQuote, 10000);

// Add new quotes from the input field
quoteInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const newQuote = e.target.value.trim();
        if (newQuote) {
            quotes.push(newQuote);
            e.target.value = "";
            alert("New quote added!");
        }
    }
});

// Display the first quote initially
quoteDisplay.innerText = quotes[currentQuoteIndex];

