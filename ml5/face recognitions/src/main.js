import {make} from './functions';

let filePicker = document.querySelector('#filePicker');

filePicker.addEventListener('change', (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.onload = () => { 
    //console.log(reader.result);
    make(reader.result); 
  }
  reader.readAsDataURL(file);
});

// call app.map.init() once the DOM is loaded
// window.addEventListener("DOMContentLoaded", function () {
//   make();
// });

