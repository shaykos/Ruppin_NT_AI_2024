let faceapi;
let img;
let detections;
const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;
let canvas, ctx;
let poseNet;
let poses = [];

// by default all options are set to true
const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};

export function readImageFromFile(file, type) {
  let reader = new FileReader();
  reader.onload = () => {
    if (type == 'face')
      face(reader.result);
    else {
      skeleton(reader.result);
    }
  }
  reader.readAsDataURL(file);
}


/**
 * The function `make` asynchronously creates an image, sets its source to "assets/frida.jpg", and
 * initializes face detection using ml5.js.
 */
async function face(base64) {
  img = new Image();
  img.src = base64;
  img.width = width;
  img.height = height;

  canvas = createCanvas(width, height);
  ctx = canvas.getContext("2d");

  faceapi = await ml5.faceApi(detectionOptions, () => { modelReady('face') });

  //faceapi.detectSingle(img, gotResults);
}

async function skeleton(base64) {
  img = new Image();
  img.src = base64;
  img.width = width;
  img.height = height;

  canvas = createCanvas(width, height);
  ctx = canvas.getContext("2d");

  poseNet = await ml5.poseNet(() => { modelReady('skeleton') });

  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });

  requestAnimationFrame(draw);

  //faceapi.detectSingle(img, gotResults);
}


function draw() {
  requestAnimationFrame(draw);

  ctx.drawImage(img, 0, 0, img.width, img.height);
  // We can call both functions to draw all keypoints and the skeletons

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    drawKeypoints();
    drawSkeleton();
  }
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    for (let j = 0; j < poses[i].pose.keypoints.length; j += 1) {
      const keypoint = poses[i].pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(keypoint.position.x, keypoint.position.y, 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = "#00FF00";
        ctx.fill();
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i += 1) {
    // For every skeleton, loop through all body connections
    for (let j = 0; j < poses[i].skeleton.length; j += 1) {
      const partA = poses[i].skeleton[j][0];
      const partB = poses[i].skeleton[j][1];
      ctx.beginPath();
      ctx.moveTo(partA.position.x, partA.position.y);
      ctx.lineTo(partB.position.x, partB.position.y);
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();
    }
  }
}

/**
 * The `modelReady` function logs "ready!" to the console and then calls the `detectSingle` function
 * from the faceapi library with the `img` parameter and a callback function `gotResults`.
 */
function modelReady(type) {
  console.log("ready!");
  if (type == 'face')
    faceapi.detectSingle(img, gotResults);
  else
    poseNet.singlePose(img);
}

/**
 * The function `gotResults` handles error checking, draws an image on a canvas, and then logs and
 * draws detections and landmarks if they are present.
 * @param err - The `err` parameter in the `gotResults` function is typically used to capture any
 * errors that may occur during the processing of the results. If an error occurs, it will be passed to
 * this parameter, and the function will log the error to the console.
 * @param result - The `result` parameter in the `gotResults` function likely contains the data or
 * information that was obtained from some operation or process. It is used to store the results of
 * that operation for further processing or display. In the provided code snippet, the `result` is
 * being assigned to the `d
 * @returns If there is an error, the error message is being logged to the console and the function
 * returns. If there are no errors, the function continues to draw the image, log the detections, and
 * call functions to draw boxes and landmarks based on the detections.
 */
function gotResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result)
  detections = result;

  ctx.drawImage(img, 0, 0, width, height);

  if (detections) {
    console.log(detections);
    drawBox(detections);
    drawLandmarks(detections);
  }
}

/**
 * The function `drawBox` takes detections as input and draws a box around the detected object on a
 * canvas with a specific color.
 * @param detections - The `detections` parameter is an object containing information about detected
 * objects. In this case, it includes an `alignedRect` property which contains information about the
 * aligned rectangle of the detected object.
 */
function drawBox(detections) {
  const alignedRect = detections.alignedRect;
  const { _x, _y, _width, _height } = alignedRect._box;
  // canvas.fillStyle = 'none';
  ctx.rect(_x, _y, _width, _height);
  ctx.strokeStyle = "#a15ffb";
  ctx.stroke();
}

/**
 * The function `drawLandmarks` takes facial landmark detections as input and draws the landmarks for
 * the mouth, nose, eyes, and eyebrows on a canvas.
 * @param detections - The `detections` parameter in the `drawLandmarks` function seems to be an object
 * containing different parts of facial landmarks such as mouth, nose, eyes, eyebrows, etc. Each part
 * consists of an array of points with `_x` and `_y` properties representing the coordinates of that
 * point
 */
function drawLandmarks(detections) {
  // mouth
  ctx.beginPath();
  detections.parts.mouth.forEach((item, idx) => {
    if (idx === 0) {
      ctx.moveTo(item._x, item._y);
    } else {
      ctx.lineTo(item._x, item._y);
    }
  });
  ctx.closePath();
  ctx.stroke();

  // nose
  ctx.beginPath();
  detections.parts.nose.forEach((item, idx) => {
    if (idx === 0) {
      ctx.moveTo(item._x, item._y);
    } else {
      ctx.lineTo(item._x, item._y);
    }
  });
  ctx.stroke();

  // // left eye
  ctx.beginPath();
  detections.parts.leftEye.forEach((item, idx) => {
    if (idx === 0) {
      ctx.moveTo(item._x, item._y);
    } else {
      ctx.lineTo(item._x, item._y);
    }
  });
  ctx.closePath();
  ctx.stroke();

  // // right eye
  ctx.beginPath();
  detections.parts.rightEye.forEach((item, idx) => {
    if (idx === 0) {
      ctx.moveTo(item._x, item._y);
    } else {
      ctx.lineTo(item._x, item._y);
    }
  });

  ctx.closePath();
  ctx.stroke();

  // // right eyebrow
  ctx.beginPath();
  detections.parts.rightEyeBrow.forEach((item, idx) => {
    if (idx === 0) {
      ctx.moveTo(item._x, item._y);
    } else {
      ctx.lineTo(item._x, item._y);
    }
  });
  ctx.stroke();
  // canvas.closePath();

  // // left eyeBrow
  ctx.beginPath();
  detections.parts.leftEyeBrow.forEach((item, idx) => {
    if (idx === 0) {
      ctx.moveTo(item._x, item._y);
    } else {
      ctx.lineTo(item._x, item._y);
    }
  });
  // canvas.closePath();

  ctx.strokeStyle = "#a15ffb";
  ctx.stroke();
}

// Helper Functions
/**
 * The function `createCanvas` creates a new HTML canvas element with the specified width and height
 * and appends it to the document body.
 * @param w - The parameter `w` in the `createCanvas` function represents the width of the canvas that
 * will be created.
 * @param h - The parameter `h` in the `createCanvas` function represents the height of the canvas that
 * will be created. It is used to specify the vertical dimension of the canvas in pixels.
 * @returns The `createCanvas` function returns a newly created HTML canvas element with the specified
 * width and height.
 */
function createCanvas(w, h) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  document.querySelector('#app').appendChild(canvas);
  return canvas;
}