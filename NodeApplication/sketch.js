//ES6 Import for NDJSON API 

// Special thanks to https://learn.ml5js.org/docs/#/reference/charrnn

const rnn = ml5.charRNN('models/bolaño/', modelLoaded);

function modelLoaded() {
  console.log('Model Loaded!');
}

//This function was sourced from https://davidwalsh.name/streaming-data-fetch-ndjson
const fetchNdjson = async () => {
  const response = await fetch("/api");
  const exampleReader = ndjsonStream(response.body).getReader();

  let result;
  while (!result || !result.done) {
    result = await exampleReader.read();
    console.log(result.done, result.value); //result.value is one line of your NDJSON data
  }
}

//fetchNdjson("poetry.ndjson").then(response => response.json()).then(json =>console.log(json));


function setup() {

  
  createCanvas(400,400);
}

rnn.generate(
  {seed : "The meaning of pizza is", length : 20, temperature : 0.5},
  (err, results) => {
    console.log(results);
  })

function draw() {
  // put drawing code here
}