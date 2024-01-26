import { showColor } from './functions';
import {inputOutputPairs} from './global';
// import { generateColor, showColor, createData } from './functions'

// let btn_brightness = document.querySelector("#btn_brightness");
// let btn_darkness = document.querySelector("#btn_darkness");
// let btn_both = document.querySelector("#btn_both");
// let clr = generateColor();
// showColor(clr);

// btn_brightness.addEventListener('click', () => {
//     let output = { brightness: 1, darkness: 0 };
//     createData({ input: clr, output });
//     clr = generateColor();
//     showColor(clr);
// });

// btn_darkness.addEventListener('click', () => {
//     let output = { darkness: 1, brightness: 0 };
//     createData({ input: clr, output });
//     clr = generateColor();
//     showColor(clr);
// });

// btn_both.addEventListener('click', () => {
//     let output = { brightness: 0.5, darkness: 0.5 };
//     createData({ input: clr, output });
//     clr = generateColor();
//     showColor(clr);
// });

let net = new brain.NeuralNetwork();

net.train(inputOutputPairs);

let clr = { r: Math.random() * 255, g: Math.random() * 255, b: Math.random() * 255 };
showColor(clr);

let output = net.run(clr);
console.log(output);







