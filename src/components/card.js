import axios from "axios"

const cardSection = document.querySelector('.cards-container')

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  

  const mainCard = document.createElement('div')
  const headlineCard = document.createElement('div')
  const authorCard = document.createElement('div')
  const ImgCard = document.createElement('div')
  const authorImg = document.createElement('img')
  const authorName = document.createElement('span')
  
  mainCard.appendChild(headlineCard)
  mainCard.appendChild(authorCard)
  authorCard.appendChild(authorImg)
  authorCard.appendChild(authorName)

  mainCard.classList.add('card')
  mainCard.classList.add('headline')
  mainCard.classList.add('author')
  ImgCard.classList.add('img-container')


  mainCard.addEventListener('click', () => {
   console.log(article.headline)

   
  })
  return mainCard
}   

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/${article}`).then(res => { 
    authorImg.src = res.data.authorPhoto
    authorName.textContent = res.data.authorName
    mainCard.textContent = res.data.headline
  
  })

  const articleCard = cardSection.appendChild(Tab(mainCard))
  return articleCard;
  
}


export { Card, cardAppender }
