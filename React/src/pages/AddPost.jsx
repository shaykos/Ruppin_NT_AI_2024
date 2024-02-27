import { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function AddPost() {

  //מידע שמתקבל ממעבר הדף
  const { state } = useLocation();

  const [post, setPost] = useState({});

  function savePost(event) {
    event.preventDefault();
    if (post?.title) {
      state.posts.push(post);
      localStorage.setItem('posts', JSON.stringify(state.posts));
      alert('ok');
      setPost({
        title: '',
        imgSrc: '',
        shortDesc: '',
        longDesc: ''
      });
    }
    else
      alert('oh no');
    //swal
  }

  return (
    <>
      <h1>Add New Post</h1>
      <form onSubmit={savePost}>
        <input type="text" placeholder='title'
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })} /><br />
        <input type="text" placeholder='image'
          value={post.imgSrc}
          onChange={(event) => setPost({ ...post, imgSrc: event.target.value })} /><br />
        <textarea placeholder='short desc'
          value={post.shortDesc}
          onChange={(event) => setPost({ ...post, shortDesc: event.target.value })} /><br />
        <textarea placeholder='full content'
          value={post.longDesc}
          onChange={(event) => setPost({ ...post, longDesc: event.target.value })} /><br />
        <button type='submit'>Save</button>
      </form>
    </>
  )
}
