const cards = document.querySelectorAll('.flip-box');
let hascardflip = false;
let lockboard=false;
let firstcard,secondcard;

function flipcard() {
    if(lockboard)return
    if(this===firstcard)return
    this.classList.add('flip')
    if (!hascardflip) {
        hascardflip=true;
        firstcard=this;
    } else {
        hascardflip=false;
        secondcard=this;
        cardmatch();
    }
}

function cardmatch() {
    if (firstcard.dataset.id===secondcard.dataset.id) {
        firstcard.removeEventListener('click',flipcard);
        secondcard.removeEventListener('click',flipcard);

    } else {
        lockboard=true;
        setTimeout(() => {
            firstcard.classList.remove('flip');
            secondcard.classList.remove('flip');
        
            resetboard();
        }, 1500);
    }
}

function resetboard() {
    [hascardflip,lockboard]=[false,false];
    [firstcard,secondcard]=[null,null]
}

(function randomcards() {
    cards.forEach(card=>{
        let random = Math.floor(Math.random()*12)
        card.style.order=random;
    })
})();

cards.forEach(card=>card.addEventListener('click',flipcard))