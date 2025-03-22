const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');
    const card = flashcards[currentIndex];
    
    cardContent.textContent = showingTerm ? card.term : card.definition;
}

// The rest of the code you will write is apart of event listeners
// Event listener for Next button
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length; // Move to next card; Wraps around
    showingTerm = true;  // Always show the term of the next card
    displayCard();
});

// Event listener for Previous button
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
});

// Event listener for Add Card button
document.getElementById('add-card-btn').addEventListener('click', () => {
    const newTerm = document.getElementById('new-term').value;
    const newDefinition = document.getElementById('new-definition').value;

    // Only add the card if you're given a term AND a definition
    if (newTerm && newDefinition) {
        flashcards.push({ term: newTerm, definition: newDefinition });
        // Clear input fields after adding the card
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
    } else {
        alert('Please enter both a term AND a definition.');
    }
});

// Event listener for toggling between term and definition of a card
document.getElementById('flashcard').addEventListener('click', () => {
    showingTerm = !showingTerm;
    displayCard();
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
