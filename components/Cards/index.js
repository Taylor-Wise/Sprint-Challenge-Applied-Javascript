// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector(".cards-container")

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    const responseInfo = response.data.articles

    responseInfo.javascript.forEach(array => {
        const newCard = createCard(array)
        cardContainer.appendChild(newCard)    
    });
    responseInfo.bootstrap.forEach(array => {
        const newCard = createCard(array)
        cardContainer.appendChild(newCard)    
    });
    responseInfo.technology.forEach(array => {
        const newCard = createCard(array)
        cardContainer.appendChild(newCard)    
    });
    responseInfo.jquery.forEach(array => {
            const newCard = createCard(array)
            cardContainer.appendChild(newCard)    
    });
    responseInfo.node.forEach(array => {
        const newCard = createCard(array)
        cardContainer.appendChild(newCard)    
    }); 
})
.catch (err => {
    console.log(err)
})

const createCard = (obj) => {
    const card = document.createElement("div")
    const headliner = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const image = document.createElement("img")
    const authName = document.createElement("span")

    card.appendChild(headliner)
    card.appendChild(author)
    author.appendChild(imgContainer)    
    imgContainer.appendChild(image)
    author.appendChild(authName)

    card.classList.add("card")
    headliner.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    headliner.textContent = obj.headline
    image.src = obj.authorPhoto
    authName.textContent = `By ${obj.authorName}`

    return card
}


