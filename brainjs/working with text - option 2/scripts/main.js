// declare the brain
console.log('brain', brain);

// import data
import { text } from '../data/sample_data';
//console.log('text', text)

// normalize data
let normalizeTextArray = text.replace('\n', '').trim().split('. ');
console.log('normalizeTextArray', normalizeTextArray);

// create taining data
let trainingData = normalizeTextArray.map(line => `${line}.`);
console.log('trainingData', trainingData)

// create machine options
let machineOptions = {
    hiddenLayers: [32,32,32]
}

// create the machine
let machine = new brain.recurrent.LSTM(machineOptions);

// create training options
let trainingOptions = {
    iterations: 2000,
    errorThresh: 0.011,
    logPeriod: 200,
    log: (stats)=> console.log('stats', stats)
}

// train the machine
machine.train(trainingData, trainingOptions);

// show the machine 
document.querySelector('#app').innerHTML = brain.utilities.toSVG(machine);

// test the machine
//גם אחרי 1000 סיבובי למידה התשובה שמתקבלת לא מספיק טובה
let sen = "what is the meaning of solar system?";
let output = machine.run(sen);
console.log('output => ', output);