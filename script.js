const cards = document.querySelectorAll('.game-card');

let cardFlip=[];

function flipCard(event)
{
    event.target.parentElement.classList.add("flip");
    cardFlip.length===2?"": cardFlip.push(event.target.parentElement);
    if(cardFlip.length === 2)
    {
       
        checkCardsMatch(cardFlip)?  setTimeout(deleteCards,500,cardFlip):setTimeout(unflipCards,500,cardFlip);
    }

    
} 

function checkCardsMatch(cards) {
    if(cards[0].id !== cards[1].id) {
        let match = cards[0].dataset.card === cards[1].dataset.card;
        return match;
    }
    else {
        return false;
    }
 
  
}


function deleteCards(cards) {
   
        cards.forEach(element => {
            getElement= document.getElementById(element.id);
            
            while (getElement.firstChild) {
                element.removeChild(element.firstChild);
              }
            }
        )
        clearShadow(cards);
        resetCardsArr()
        gameOver()
        
}

function gameOver() {
    let tmp =document.querySelectorAll('.game-card img');
    tmp.length===0?alert("gameOver"):"";
}

function unflipCards(cards) {
    cards.forEach(element => {
        element.classList.remove('flip');
    })
    resetCardsArr()
}

function resetCardsArr() {
    cardFlip=[];
}
function clearShadow(cards) {
    cards.forEach(element => {
        getElement= document.getElementById(element.id);
        getElement.style.boxShadow="none";
})
    
}

cards.forEach(card => card.addEventListener("click", flipCard));