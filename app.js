 // replace whitespace with + 


// Secret key Every api server has a way to authenticate the request by passing a secret key. Put your secret key down here
// replace your secret key with config.SECRET_API_KEY.

// get search button from DOM 
const searchButton = document.getElementById("searchButton")
// get search input from DOM 
const searchFelid = document.getElementById("searchField")


// fire event on click 
searchButton.onclick = (event) => {
    // cancel default behavior (refresh page)
    event.preventDefault()

    // get search value 
    const moveName = searchField.value

    // call getData function and pass move name as parameter 
    getData(moveName);
}

// function to handle get data from server 
function getData(moveName) {
    // one of stander URL role is the url doesn't accept whitespace here we are replace whitespace whit '+' (this info from api documentation)
    // handle whitespace 
    moveName = moveName.replace(' ', '+');
    // fetch function take api URL as as parameter 
    // the url must have api key and move name   
    fetch("https://digimon-api.herokuapp.com/api/digimon/name/"+moveName)
        // convert response to object by json() method 
        .then((response) => response.json())
        // after we handle the response 
        .then((data) => {
            // log the response as object
            console.log(data)

            // call function display and take data as parameter to represent the data by DOM Manipulation
            display(data)
        });
}





let cardDiv = document.getElementById("cardDiv");

function display(data) {
 
    // create div container and set class name 
    let divCol = document.createElement("div");
    divCol.className = "col-sm-3";
    cardDiv.append(divCol);

    // create div container to carry card-title, card-image, card-body, and card-text 
    let card = document.createElement("div");
    card.className = "card"
    divCol.append(card);

    let imgCard = document.createElement("img");
    imgCard.className = "card-img-top w-100";
    imgCard.style.width = "100px"
    imgCard.src = data[0].img
    card.append(imgCard)

    let cardBody = document.createElement("div");
    cardBody.className = "card-body"
    card.append(cardBody);

    let cardText = document.createElement("p");
    cardText.className = "card-text"
    cardText.setAttribute('style', 'white-space: pre;');
    cardText.textContent = "- name: " + data[0].name + " level: " + data[0].level;
    cardBody.append(cardText);

}