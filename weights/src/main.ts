declare const brain: any;

// // Create a new neural network
// const net = new brain.NeuralNetwork();

// // Weather decision training data
// const trainingData = [
//   { input: { temperature: 25, humidity: 60, wind: 10 }, output: { goForRun: 1 } },
//   { input: { temperature: 18, humidity: 50, wind: 5 }, output: { goForRun: 0 } },
//   { input: { temperature: 30, humidity: 70, wind: 15 }, output: { goForRun: 1 } },
//   { input: { temperature: 12, humidity: 45, wind: 8 }, output: { goForRun: 0 } },
// ];

// // Train the neural network
// net.train(trainingData, {
//   logPeriod: 100,
//   log: (stats)=> console.log('stats', stats)
// });

// // Make predictions
// const decision1 = net.run({ temperature: 20, humidity: 55, wind: 12 });
// // Expected output: { goForRun: 1 }

// const decision2 = net.run({ temperature: 10, humidity: 40, wind: 5 });
// // Expected output: { goForRun: 0 }

// // Display predictions
// console.log('Decision for {20, 55, 12}:', decision1);
// console.log('Decision for {10, 40, 5}:', decision2);



// Custom training example for y = 2x + 1
const customTrainingExample = () => {
  // Create a new neural network with one input and one output neuron
  const net = new brain.NeuralNetwork({ hiddenLayers: [2] });
  

  
  // Manually set initial weights for simplicity
  const initialWeights = net.toJSON().weights;
  console.log('initialWeights', initialWeights);
  const weights = [2, 1, -1, -2]; // [input-to-hidden, hidden-to-output, hidden-bias, output-bias]
  net.fromJSON({ ...initialWeights, weights });

  // Custom training loop
  const learningRate = 0.01;
  const iterations = 1000;

  for (let i = 0; i < iterations; i++) {
    // Generate random input data
    const x = Math.random() * 10;

    // Calculate target output (ground truth) based on y = 2x + 1
    const targetOutput = 2 * x + 1;

    // Forward pass to get predicted output
    const output = net.run({ input: x });

    // Compute error
    const error = targetOutput - output.output;

    // Backpropagation: Manually adjust weights
    weights[0] += learningRate * error * output.layers[0].raw.input[0];
    weights[1] += learningRate * error * output.layers[1].raw.input[0];
    weights[2] += learningRate * error;
    weights[3] += learningRate * error;

    // Update the neural network with the adjusted weights
    net.fromJSON({ ...initialWeights, weights });
  }


  // Test the trained network
  const testInput = 5;
  const testOutput = net.run({ input: testInput });

  console.log(`Target output for input ${testInput}: ${2 * testInput + 1}`);
  console.log(`Predicted output: ${testOutput.output}`);
};

// Run the custom training example
customTrainingExample();