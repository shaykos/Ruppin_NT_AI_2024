// declare the brain var
console.log(brain);

// training data
// {input: "", output: ""}

let trainingData = [
  {input: "sing a song", output: "happy"},
  {input: "the sun is burning", output: "sad"},
  {input: "raining days", output: "happy"},
  {input: "driving fast cars", output: "happy"},
  {input: "learning and homework", output: "sad"},
  {input: "watch tv and movies", output: "happy"},
]

// create network options
let networkOptions = {
  hiddenLayers: [32, 32]
}

// create the network
//out network model is RNN with LSTM => Recurrent Neural Network with Long-Short-Term-Memory 
let net = new brain.recurrent.LSTM(networkOptions);

// training options
let trainingOptions = {
  iterations: 5000,
  errorThresh: 0.011,
  logPeriod: 200,
  log: (stats)=>console.log('stats', stats)
}

// train the network
net.train(trainingData, trainingOptions);

// show the network
document.querySelector('#app').innerHTML = brain.utilities.toSVG(net);

// test the network
let sen = "my c# professor gave us work to do";
let output = net.run(sen);
console.log('output', output);
//output should be: sad

