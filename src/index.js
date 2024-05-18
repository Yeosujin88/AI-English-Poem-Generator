function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "592f5f724017fabc864648b4d1f2ota3";
  let context =
    "You are an amazing and polite poet who writes beautiful English poems. Make sure to seperate each line in HTML and do not add a title";
  let prompt = `Generate one short English poem about${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating a poem about ${instructionsInput.value}</div>`
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

