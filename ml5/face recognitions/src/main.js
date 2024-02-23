import {readImageFromFile} from './functions';

let filePicker = document.querySelector('#filePicker');
document.querySelector('#face').addEventListener('click', ()=>{
  readImageFromFile(filePicker.files[0], 'face');
});


document.querySelector('#skeleton').addEventListener('click', ()=>{
  readImageFromFile(filePicker.files[0], 'skeleton');
});




// filePicker.addEventListener('change', (event) => {
//   let file = event.target.files[0];
//   let reader = new FileReader();

//   reader.onload = () => { 
//     make(reader.result); 
//   }
//   reader.readAsDataURL(file);
// });





