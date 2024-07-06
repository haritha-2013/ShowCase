import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchTerm, onSearchChange }) => {
    return (
        <header>
            <div className='login'>
                {<Link to ='/login' className='custom-link'>Login</Link>}
                <span class="material-symbols-outlined">
                person
                </span>
            </div>

            <div className="logo">
                {'ShowCase'}
            </div>

          
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Here..."
                    value={searchTerm}
                    onChange={onSearchChange}
                />
                <button type="button">Search</button>
            </div>
        </header>
    );
};

export default Header;

