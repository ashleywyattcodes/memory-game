const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]

// sort array randomly 
cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

//create board 
function createBoard () {
    for (let i = 0; i < cardArray.length; i++){
        // use element to create image 
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        // add event listener to each card.
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card) 
    }
}
createBoard()

// function for checking to see if cards are a match. 

function checkForMatch() {
   const cards = document.querySelectorAll('img')  // change to document.querySelectorAll(#grid 'img') if making project bigger. 
   const optionOneId = cardsChosenIds[0]
   const optionTwoId = cardsChosenIds[1]
    // get both items in your chosen card array & check if they match 
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same card!')
    }
    else if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    // anything else besides match 
    else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }


}

// write function that allows you to flip the card when you click it. 
function flipCard() {
    // this allows us to interact with whatever element we click. 
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    // add the image corresponding with the name for each time it is clicked. 
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
}
