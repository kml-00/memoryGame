let card=document.querySelector('.memory-game-container');
let teils = [];
let id=1;
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

function createImgArray() {
    for (let i=0; i<12; i++) {
        let tmp="title_"+Math.floor(i/2);
        teils.push(tmp);
    } 
}



function createHtmlElements(teils)  {
    teils.forEach(el => {
        let element=document.createElement("div")
        element.classList.add("game-card")
        element.id=id;
        element.dataset.card=el 
       
       
        let image = document.createElement("img") 
        image.src="img/"+el+".png"; 
        image.classList.add("card-front")
       
        let image2 = document.createElement("img") 
        image2.src=""
        image2.classList.add("card-back")
       
       
        element.appendChild(image) 
        element.appendChild(image2);
        card.appendChild(element);
       id++;
    })
}

function shufle(teils) {
    let shufledteils=[];
    let half=teils.length  / 2;
    for (let i = 0; i < half; i++) {
        shufledteils.push(teils[i]);
        shufledteils.push(teils[half+ i]);
      } 
    return shufledteils;

}

function initGame() {
    createImgArray();
    teils=shufle(teils);
    teils=shufle(teils);
    teils=shufle(teils);
    createHtmlElements(teils);
}
function bindListerners() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => card.addEventListener("click", flipCard));
}


initGame();
bindListerners();
