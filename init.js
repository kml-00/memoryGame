let card=document.querySelector('.memory-game-container');
let teils = [];
let id=1;

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


createImgArray();
teils=shufle(teils);
teils=shufle(teils);
teils=shufle(teils);
createHtmlElements(teils);



 
 //  Object.keys(titlesImg).length