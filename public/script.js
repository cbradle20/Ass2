const arr1 = []; // need to put the api stuff into this array somehow



function findMatches(wordToMatch, arr1) {   // this finds and filters things in such array
    return arr1.filter(resturant => {

        const regex = new RegExp(wordToMatch, 'gi');
        return resturant.name.match(regex) || resturant.category.match(regex) 
        || resturant.city.match(regex) || resturant.state.match(regex)

    });
}

function displayMatches() {    //displays it
    const matchArray = findmatches(this.value, arr1);
    const html = matchArray.map(resturant => { //finish the list thing
        return `
        <li>
            <span class =    
        `;
    }).json('');
    suggestions.innerHTML = html;
}




const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);


//stopped following the video at the 12 min mark












document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
      .catch((err) => {
        console.log(err);
      });
  });