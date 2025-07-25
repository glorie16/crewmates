import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/create-fairy">Create a Fairy</a></li>
                    <li><a href="/view-fairies">View Fairies</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar