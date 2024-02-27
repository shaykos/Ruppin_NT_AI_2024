import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import AddPost from './pages/AddPost';
import Post from './pages/Post';
import Rating from './components/Rating';

export const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/add', element: <AddPost /> },
    {
        path: '/blog/:title', 
        element: <Post />,
        children: [
            {path: 'rating', element: <Rating />}
        ]
    }
]);