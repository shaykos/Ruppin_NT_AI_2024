import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState(null);

  function convertToBase64(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setImage(reader.result)
    };

    reader.onerror = function () {
      console.log(reader.error);
    };

  }

  async function uploadImageToCloud(event) {
    event.preventDefault();

    if (image == '')
      return alert('please choose a file');

    let res = await fetch('http://localhost:9876/api/image/upload', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ base64: image })
    });

    //התשובה לא מכילה סטטוס מסוג 200
    if (!res.ok) {
      console.log({ res });
      return;
    }

    let data = await res.json();
    console.log(data);
    setImageURL(data.result.secure_url);

  }

  return (
    <>
      <form onSubmit={uploadImageToCloud}>
        <input type="file" onChange={convertToBase64} />
        <br />
        <button type='submit'>Upload</button>
        <br />
        {
          imageURL ? <img src={imageURL} style={{ width: '300px' }} /> : null
        }

      </form>
    </>
  )
}

export default App
