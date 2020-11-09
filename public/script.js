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
        return restaurant.name.match(regex) || restaurant.category.match(regex) || restaurant.address_line_1.match(regex); /*|| restaurant.city.match(regex) || restaurant.state.match(regex)*/ 

    });
}

/*I looked very briefly at some examples
online while seeing if a titlecase function already existed. I got the first part of this function 
frome examples on https://www.tutorialspoint.com/how-to-title-case-a-sentence-in-javascript,
after that part, I looked away and wrote the rest on my own*/
function toTitleCase(str) {
    let strArray=str.toLowerCase().split(" ")
    let finalArr=[]
    strArray.forEach(element => finalArr.push(element.replace(element[0],element[0].toUpperCase())));
    const arrayStr=finalArr.join(" ")
    console.log(arrayStr)
    return arrayStr
}

function displayMatches() { 
    const matchArray = findMatches(this.value, arr1);
    const html = matchArray.map(restaurant => { 
     
        return `
        <div class="content">
        
            <h1><span class="name">${restaurant.name} </span></h1>
        
            <h2><span class="category">${toTitleCase(String(restaurant.category))}</span></h2>
            
            <h2><span class="address">${toTitleCase(String(restaurant.address_line_1))}</span></h2>
            
        </div>
        `;
    });
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.userInput');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);


