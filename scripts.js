// the code inside of the function below is given on the page for this API on the Rapid API Hub
// We will add a call to another function we'll write that will display the data returned by the API
function getPhotos(){
    // from rapid API - random cat pictures
    // https://rapidapi.com/rvaldezit/api/cat14/

    // below is an example of the returned data
    // [
    // {"id":"62","url":"https://cdn2.thecatapi.com/images/62.jpg","width":568,"height":580},
    // {"id":"133","url":"https://cdn2.thecatapi.com/images/133.jpg","width":500,"height":625},
    // {"id":"189","url":"https://cdn2.thecatapi.com/images/189.gif","width":500,"height":281},
    // {"id":"29t","url":"https://cdn2.thecatapi.com/images/29t.jpg","width":420,"height":282},
    // {"id":"583","url":"https://cdn2.thecatapi.com/images/583.jpg","width":459,"height":612},
    // {"id":"7js","url":"https://cdn2.thecatapi.com/images/7js.png","width":376,"height":505},
    // {"id":"boj","url":"https://cdn2.thecatapi.com/images/boj.jpg","width":612,"height":612},
    // {"id":"MTUyNjg2NA","url":"https://cdn2.thecatapi.com/images/MTUyNjg2NA.gif","width":425,"height":239},
    // {"id":"snxE5_PPX","url":"https://cdn2.thecatapi.com/images/snxE5_PPX.jpg","width":3888,"height":2592},
    // {"id":"JnD5BF9Uq","url":"https://cdn2.thecatapi.com/images/JnD5BF9Uq.jpg","width":1200,"height":800}
    // ]
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            // convert the returned data from a string to JSON data
            let json = JSON.parse(this.response);
            console.log('the JSON after parsing, before sending to display', json);
            // send the JSON data to our function to display it
            displayPhotos(json);
        }
    });

    xhr.open('GET', 'https://cat14.p.rapidapi.com/v1/images/search?limit=10');
    xhr.setRequestHeader('X-RapidAPI-Key', 'df89e32c09mshf69a2dfbaefc3ebp1de1c8jsnea0ff3d093d7');
    xhr.setRequestHeader('X-RapidAPI-Host', 'cat14.p.rapidapi.com');

    xhr.send(data);
}

// the function below will use the returned JSON data to display the cat photos
function displayPhotos(json){
    console.log('the parsed JSON data: ', json);
    // console.log(typeof(json));
    // what we get back from this call is an array of JSON objects
    // each object includes the following properties:
    // id - unique identifier
    // url - the place on the web where the image is hosted
    // width - the width of the image
    // height - the height of the image
    // we'll use everything but the ids to make sure we display our photos properly
    // it's handy when APIs that return photos also include their width and height!

    const outputDiv = document.getElementById("cats");

    let output = "";

    for(let photo of json){
        // TO DO
        output += `
            <img src="${"add image url here"}" alt="" width="${"add image width here"}" height="${"add image height here"}">
        `;

    }

    outputDiv.innerHTML = output;
}

// the function that will display the data from our JSON file of users to the console
function getUsers(data){
    console.log('This is our user data from the file: ', data);
    // TO DO - ADD USER INFO TO PAGE
}

// call the function to display the cat photos on page load
// the window.onload handler is where we can attach event handlers 
// that won't be added to the page until the content has loaded
window.onload = function(){
    getPhotos();

    // get the data stored in our local JSON file so we can use it 
    // to display portions of the data returned
    // this only works if you open your HTML file using the live 
    // server option in VS Code, I will demonstrate
    fetch("users.json")
        .then(response => response.json())
        .then(data => getUsers(data));
};



// we'll also play around some with the Random User API
// https://randomuser.me/
// https://randomuser.me/api/?results=12&nat=us
// this one is great because you do not need a key to use it
// that means you can practice calls without worrying about 
// running out, and you can paste the endpoint into your browser
// to test it and see the data returned

// example return data can be found in the users.json file in this activity:
