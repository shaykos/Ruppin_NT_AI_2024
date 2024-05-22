// console.log('ml5 version:', ml5.version);

//1) load the model
let classifier = await ml5.imageClassifier("MobileNet");
//console.log('model is ready', classifier);

//2) create an image
let mufasa = document.querySelector('#mufasa');
let lion = document.querySelector('#lion');
let lionPrediction = document.querySelector('#lion-prediction');
let mufasaPrediction = document.querySelector('#mufasa-prediction');

//3) create prediction + print the result
let prediction1 = classifier.predict(lion, (error, result) => {
  if (error)
    console.error(error);
  else {
    console.log('res pre1 =>', result);
    let str = result.map(res => `<span>Label: ${res.label}, confidence: ${(res.confidence*100).toFixed(2)}%</span><br/>`);
    lionPrediction.innerHTML = str;
  }
});

let prediction2 = classifier.predict(mufasa, (error, result) => {
  if (error)
    console.error(error);
  else {
    console.log('res pre1 =>', result);
    let str = result.map(res => `<span>Label: ${res.label}, confidence: ${(res.confidence*100).toFixed(2)}%</span><br/>`);
    mufasaPrediction.innerHTML = str;
  }
});
