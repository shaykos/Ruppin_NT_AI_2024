import React from 'react';
import {Link} from 'react-router-dom';

export default function BlogPreview({ imgSrc, title, shortDesc }) {
  return (
    <>
      <div className="blog_preview">
        <header style={{ backgroundImage: imgSrc }}>
          <Link to={`/blog/${title}`}><h3>{title}</h3></Link>
        </header>
        <p>{shortDesc}</p>
      </div>
    </>
  )
}
