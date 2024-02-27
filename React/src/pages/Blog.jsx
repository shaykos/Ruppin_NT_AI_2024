import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import BlogPreview from '../components/BlogPreview';
import { Link } from 'react-router-dom';

export default function Blog() {

  const [posts, setPosts] = useState([]);

  //:מסתכל על מחזור החיים של הקומפוננטה
  //טעינה , עדכון מצב, עזיבת הקומפוננטה
  //נדע על איזה חלק ממחזור החיים אנחנו רוצים להשפיע לפי הסוגריים המרבועות בהוק
  //[] -> טעינה של הקומפוננטה
  //[state1, state2, ...] --> עדכון 
  //return ()=>{} --> עזיבת הקומפוננטה
  
  //הוק שפועל כל טעינה של הקומפוננטה
  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts(){
    let allPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(allPosts);
  }

  return (
    <>
      <Navbar />
      <h1>Welcome to my blog</h1>
      <div>
        {posts.map((post, index) => <BlogPreview key={index} {...post} />)}
      </div>
      <Link to="/blog/add" state={{ posts }}>add post</Link>
    </>
  )
}