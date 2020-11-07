const arr1 = []; 


fetch("/api", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json', 
  },
}).then(blob => blob.json())
  .then(data => arr1.push(...data));




function findMatches(wordToMatch, arr1) {  
    return arr1.filter((resturant) => {

        const regex = new RegExp(wordToMatch, 'gi');
        return resturant.name.match(regex) || resturant.category.match(regex) || resturant.city.match(regex) || resturant.state.match(regex) || resteraunt.address_line_1.match(regex)

    });
}

function displayMatches() { 
    const matchArray = findmatches(this.value, arr1);
    const html = matchArray.map(resteraunt => { 
      const regex = new RegExp(this.value,'gi');
      const name = arr1.name.replace(regex, `<span class="h1">'${this.
      value}</span>`)
      const category = arr1.category.replace(regex, `<span class="h1">'${this.
      value}</span>`)
      const city = arr1.city.replace(regex, `<span class="h1">'${this.
      value}</span>`)
      const state = arr1.state.replace(regex, `<span class="h1">'${this.
      value}</span>`)
      const address = arr1.address_line_1.replace(regex, `<span class="h1">'${this.
      value}</span>`)

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

const searchInput = document.querySelector('.textInput');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input',displayMatches);
searchInput.addEventListener('keyup',displayMatches);