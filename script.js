const cards = document.querySelectorAll('.game-card');

let firstCard,secondCard;

function flipCard(event)
{
    event.target.parentElement.classList.add("flip");
} 


cards.forEach(card => card.addEventListener("click", flipCard));