const arr1 = []; // need to put the api stuff into this array somehow

  arr1.push(jsonFromServer);
  console.log(arr1);


function findMatches(wordToMatch, arr1) {   // this finds and filters things in such array
    return arr1.filter(resturant => {

        const regex = new RegExp(wordToMatch, 'gi');
        return resturant.name.match(regex) || resturant.category.match(regex) 
        || resturant.city.match(regex) || resturant.state.match(regex) || resteraunt.address_line_1.match(regex)

    });
}

function displayMatches() {    //displays it
    const matchArray = findmatches(this.value, arr1);
    const html = matchArray.map(resturant => { //finish the list thing
        return `
        <li>
            <span class="name">${resteraunt.name} </span>
            <span class="category">${resteraunt.category}</span>
            <span class="city">${resteraunt.city}</span>
            <span class="state">${resteraunt.state}</span>
            <span class="address">${resteraunt.address_line_1}</span>
        </li>
        `;
    }).json('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);


//stopped following the video at the 12 min mark


function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  // Process your restaurants list
  // Make a configuration object for your chart
  // Instantiate your chart
  const reorganizedData = convertRestaurantsToCategories(jsonFromServer);
  const options = makeYourOptionsObject(reorganizedData);
  
}

document.body.addEventListener('keyup', async (e) => { // I got this from lab 7,not sure if it is needed
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