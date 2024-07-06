import React, { useState } from 'react';
import Header from '../Header';
import Products from '../Product';

const Layout = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Products searchTerm={searchTerm} />
        </div>
    );
};

export default Layout;
