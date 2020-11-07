 const arr1 = [];
 
fetch('/api', {
  method: 'POST', 
  headers: {
  'Content-Type': 'application/json' 
},
}).then(blob => blob.json())
.then(data => arr1.push(...data));


function findMatches(wordToMatch, arr1) {  
    return arr1.filter((restaurant) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return restaurant.name.match(regex) || restaurant.category.match(regex); //|| restaurant.city.match(regex) || restaurant.state.match(regex) || restaurant.address_line_1.match(regex);

    });
}

function displayMatches() { 
    const matchArray = findmatches(this.value, arr1);
    const html = matchArray.map(restaurant => { 
     // const regex = new RegExp(this.value,'gi');
     // const name = arr1.name.replace(regex, `<span class="name">'${this.
     // value}</span>`)
     // const category = arr1.category.replace(regex, `<span class="categrory">'${this.
     // value}</span>`)
     // const city = arr1.city.replace(regex, `<span class="h1">'${this.
     // value}</span>`)
     // const state = arr1.state.replace(regex, `<span class="h1">'${this.
     // value}</span>`)
     // const address = arr1.address_line_1.replace(regex, `<span class="h1">'${this.
     // value}</span>`)

        return `
        <li>
            <span class="name">${restaurant.name} </span>
            <span class="category">${restaurant.category}</span>
        </li>
        `;
    }).json('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.userInput');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);




// <span class="city">${restaurant.city}</span>
// <span class="state">${restaurant.state}</span>
// <span class="address">${restaurant.address_line_1}</span>