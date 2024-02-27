import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function Post() {

    //מידע שנשלח בשורת הכתובת
    const { title } = useParams();

    //מציג פוסט ספציפי
    const [post, setPost] = useState({});

    function loadPost() {
        let allPosts = JSON.parse(localStorage.getItem('posts'));
        setPost(allPosts.find((item) => item.title == title));
    }

    //כל טעינה של הדף נרצה לשלוף ולהציג את הפוסט הרלוונטי
    useEffect(() => {
        loadPost();
    }, [])

    return (
        <>
            <div className="post_page">
                <header style={{ backgroundImage: post.imgSrc }}>
                    <h3>{title}</h3>
                </header>
                <p>{post.shortDesc}</p>
                <p>{post.longDesc}</p>
                <Link to="rating">rate us...</Link>
                <Outlet />
            </div>
        </>
    )
}
