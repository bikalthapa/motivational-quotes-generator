
// Declaring Variables //
const quotearea = document.getElementById("quote");
const writearea = document.getElementById("writer");
let i = 0;
function quote(){
    let writer = [
        "Dr. Seuss",
        "Chinese proverb",
        "Ken Blanchard",
        "Jennifer Dukes Lee",
        "Anonymous",
        "Dr. Seuss",
        "Albert Einstein",
        "A.A. Milne",
        "Abraham Lincoln",
        "Thomas Edison",
        "Thomas Jefferson",
        "Elon Musk",
        "Walt Disney",
        "Helen Hayes",
        "Zig Ziglar",
        "Mason Cooley",
        "Babe Ruth",
        "Albert Einstein",
        "John Wooden",
        "Plutarch",
        "B.B. King",
        "B.B. King",
        "Mark Twain",
        "Malcolm X",
        "Chinese proverb",

    ];

    let quotes = [
        "You have to be odd to be No.1.",
        "He who asks a question is a fool for five minutes;<br> he who does not ask a question remains a fool forever.",
        "None of us is as smart as all of us.",
        "In a world where you can be anything, be kind.",
        "Today a reader.<br> Tomorrow a leader.",
        "The more that you read,<br> the more things you will know,<br> the more that you learn,<br> the more places you'll go.",
        "Learn from yesterday.<br> Live for today.<br> Hope for tomorrow.",
        "You are braver than you believe,<br> stronger than you seem and smarter than you think.",
        "The best way to predict your future is to create it.",
        "Genius is 10% inspiration,<br> 90% perspiration.",
        "I find that the harder I work,<br> the more luck I seem to have.",
        "I think it's possible for ordinary people<br> to choose to be extraordinary.",
        "The way to get started is to<br> quit talking and begin doing.",
        "The expert in anything was once a beginner.",
        "You don't have to be great to start,<br> but you have to start to be great.",
        "Procrastination makes easy things hard<br> and hard things harder.",
        "Never let the fear of striking out<br> stop you from playing the game.",
        "A person who never made a mistake<br> never tried anything new.",
        "Don't let what you cannot do<br> interfere with what you can do.",
        "The mind is not a vessel to be filled<br> but a fire to be ignited.",
        "Education is the most powerful weapon<br> you can use to change the world.",
        "The beautiful thing about learning is that<br> no one can take it away from you.",
        "The man who does not read books has no advantage<br> over the one who cannot read them.",
        "Education is the passport to the future,<br> for tomorrow belongs to those who prepare for it today.",
        "Teachers can open the door,<br> but you must enter it yourself."
    ];

    i++;
    if(i>=quotes.length){
        i = 0;
    };
    quotearea.innerHTML = quotes[i];
    writearea.innerHTML = writer[i];
}

function bikal(){
    setInterval(quote,60000);
}
