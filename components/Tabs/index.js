// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data=> {
const newData = data.data;
newData.topics.forEach(item=>{
    const newTopic = document.createElement('span');
    newTopic.innerText = item;
    newTopic.addEventListener('click', ()=>{
        newTopic.classList.toggle('active-tab');
    })
    newTopic.classList.add('tab');
    // console.log(newTopic);
const mainTopic = document.querySelector('.topics');
// console.log(mainTopic);
mainTopic.appendChild(newTopic);
})

})
.catch(error=> {
document.body.innerText(error);
});