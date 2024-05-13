function displayPoem(response){

     new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
     });
}


function generatePoem(event) {
  event.preventDefault();

 

let instructionsInput = document.querySelector("#instructions")
let apiKey = "592f5f724017fabc864648b4d1f2ota3";
let context="You are an amazing and polite poet who writes beautiful English poems. Make sure to seperate each line in HTML form. Create only one poem each time";
let prompt=`Generate one short English poem about${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
