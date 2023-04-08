/* To get data from a JSON file hosted on the web, you can use the built-in fetch() function in JavaScript. Here's an example function 
   that retrieves data from a JSON file: */

async function getDataFromJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

// This function is asynchronous, which means it returns a Promise that resolves with the JSON data when the data has been 
// retrieved. You can use it like this:  
const url = 'https://raw.githubusercontent.com/Prisoner-s-Dilemma/OpenAccess-DigitalEthics-ProjectMaterial/main/final%20data%20/all%20countries.json';

getDataFromJSON(url)
.then(data => {
    // Do something with the data, such as display it on the page.
    console.log(data);
})
.catch(error => {
    // Handle errors here.
    console.error(error);
});
  
/*In this example, the getDataFromJSON() function takes a URL as a parameter and uses fetch() to retrieve the data from that URL. 
  The response is then converted to JSON using the .json() method, and the resulting data is returned.
  
  The example also shows how you can use the function by passing in the URL and using a .then() method to handle the resulting data, 
  and a .catch() method to handle any errors that might occur during the fetch request. */

  