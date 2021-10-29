import axios from "axios";

axios.get("http://localhost:5000/api/topics").then(res =>{
  console.log(res);
})

const pageTabs = document.querySelector('.tabs-container');

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const newsTopics = document.createElement('div')
  const firstTopic = document.createElement('div')
  const secondTopic = document.createElement('div')
  const thirdTopic = document.createElement('div')
  const fourthTopic = document.createElement('div')
  const fifthTopic = document.createElement('div')

  newsTopics.classList.add('topics');
  newsTopics.classList.add('tab');
  newsTopics.classList.add('tab');
  newsTopics.classList.add('tab');
  newsTopics.classList.add('tab');
  newsTopics.classList.add('tab');
  

  newsTopics.appendChild(firstTopic);
  newsTopics.appendChild(secondTopic);
  newsTopics.appendChild(thirdTopic);
  newsTopics.appendChild(fourthTopic);
  newsTopics.appendChild(fifthTopic);
  
  return newsTopics;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`).then(res => {
    res.data.topics[0]
    res.data.topics[1]
    res.data.topics[2]
    res.data.topics[3]
    res.data.topics[4]

  })
  pageTabs.appendChild(Tabs())
}

export { Tabs, tabsAppender }
