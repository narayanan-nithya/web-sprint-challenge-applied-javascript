
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const mainHeader = document.createElement('div')
  const newsDate = document.createElement('span')
  const newsTitle = document.createElement('h1')
  const newsTemp = document.createElement('span')

  mainHeader.appendChild(newsTitle);
  mainHeader.appendChild(newsDate);
  mainHeader.appendChild(newsTemp);

  mainHeader.classList.add('header');
  mainHeader.classList.add('date');
  mainHeader.classList.add('h1');
  mainHeader.classList.add('temp');

  newsTitle.textContent = title;
  newsDate.textContent = date;
  newsTemp.textContent = temp;

  return mainHeader;
}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const pageHeader = document.querySelector('.header-container');
  pageHeader.append(Header('Lambda Times', 'October 29', '75 F'));

}

export { Header, headerAppender }
