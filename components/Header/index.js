// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    //creating elements that will be appended to .headerContainer later
    const mainDiv = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');
    
    //Adding classes and text to created elements
    mainDiv.classList.add('header');
    span.classList.add('date');
    span.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    span2.classList.add('temp');
    span2.textContent = '98°';
    
    //looping over provisional elements array, using a forEach callback to append them to the main div
    [span,h1,span2].forEach(element => {
        mainDiv.appendChild(element);
    })
    return mainDiv;
    
    }
    
    //Link to the header container DOM, and append the header creator function to it
    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(Header());
