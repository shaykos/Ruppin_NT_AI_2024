import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                </ul>
            </nav>
        </>
    )
}
